#!/usr/bin/env python3
"""
Kubernetes Tools Discovery Script for ajeetraina/kubetools
Automatically discovers new Kubernetes tools and generates issues/PRs
"""

import requests
import json
import time
import os
import sys
from datetime import datetime, timedelta

class KubeToolsDiscovery:
    def __init__(self, github_token):
        self.token = github_token
        self.headers = {"Authorization": f"token {github_token}"}
        self.session = requests.Session()
        self.session.headers.update(self.headers)
        
        # Category mapping based on kubetools structure
        self.categories = {
            'monitoring': ['monitoring', 'metrics', 'observability', 'prometheus', 'grafana', 'alert'],
            'security': ['security', 'scan', 'policy', 'rbac', 'falco', 'admission', 'vulnerability'],
            'networking': ['network', 'ingress', 'service-mesh', 'istio', 'linkerd', 'envoy', 'proxy'],
            'storage': ['storage', 'volume', 'persistent', 'csi', 'backup'],
            'ci-cd': ['ci', 'cd', 'pipeline', 'deployment', 'gitops', 'tekton', 'argo'],
            'development': ['dev', 'development', 'debug', 'testing', 'local'],
            'cluster-management': ['cluster', 'node', 'management', 'scaling', 'autoscaler'],
            'ai-ml': ['ai', 'ml', 'machine-learning', 'tensorflow', 'pytorch', 'kubeflow'],
        }

    def search_new_tools(self, days_back=7):
        """Search for new Kubernetes tools on GitHub"""
        since = (datetime.now() - timedelta(days=days_back)).strftime('%Y-%m-%d')
        
        search_queries = [
            f"kubernetes created:>{since} stars:>5",
            f"kubectl plugin created:>{since} stars:>3",
            f"topic:kubernetes created:>{since} stars:>3",
        ]
        
        discovered_tools = []
        
        for query in search_queries:
            print(f"🔍 Searching: {query}")
            
            try:
                url = f"https://api.github.com/search/repositories"
                params = {
                    'q': query,
                    'sort': 'stars',
                    'order': 'desc',
                    'per_page': 10
                }
                
                response = self.session.get(url, params=params)
                
                if response.status_code == 200:
                    data = response.json()
                    print(f"   Found {data['total_count']} results")
                    
                    for repo in data['items']:
                        tool_info = self.extract_tool_info(repo)
                        if self.is_valid_kubernetes_tool(tool_info):
                            discovered_tools.append(tool_info)
                            
                elif response.status_code == 403:
                    print("   ⚠️  Rate limited, waiting...")
                    time.sleep(60)
                else:
                    print(f"   ❌ Error {response.status_code}")
                    
            except Exception as e:
                print(f"   ❌ Exception: {e}")
                
            time.sleep(2)
        
        unique_tools = self.deduplicate_tools(discovered_tools)
        print(f"\n✅ Found {len(unique_tools)} unique tools")
        
        return unique_tools

    def extract_tool_info(self, repo):
        """Extract relevant information from GitHub repo"""
        return {
            'name': repo['name'],
            'full_name': repo['full_name'],
            'description': repo.get('description', ''),
            'url': repo['html_url'],
            'stars': repo['stargazers_count'],
            'topics': repo.get('topics', []),
            'created_at': repo['created_at'],
        }

    def is_valid_kubernetes_tool(self, tool):
        """Validate if this is a legitimate Kubernetes tool"""
        desc = tool['description'].lower()
        topics = [t.lower() for t in tool['topics']]
        name = tool['name'].lower()
        
        # Must be Kubernetes-related
        k8s_indicators = ['kubernetes', 'k8s', 'kubectl', 'kube', 'helm', 'operator']
        has_k8s_relation = any(indicator in desc or indicator in name or indicator in topics 
                              for indicator in k8s_indicators)
        
        return tool['stars'] >= 3 and len(tool['description']) > 10 and has_k8s_relation

    def deduplicate_tools(self, tools):
        """Remove duplicate tools"""
        seen = set()
        unique_tools = []
        
        for tool in tools:
            key = tool['full_name']
            if key not in seen:
                seen.add(key)
                unique_tools.append(tool)
                
        return unique_tools

    def save_results(self, tools):
        """Save discovered tools to files"""
        if not tools:
            print("😴 No tools discovered")
            return False
            
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        
        # Save to JSON
        filename = f'discovered_tools_{timestamp}.json'
        with open(filename, 'w') as f:
            json.dump(tools, f, indent=2)
        
        print(f"💾 Results saved: {filename}")
        return True

def main():
    github_token = os.getenv('GITHUB_TOKEN')
    if not github_token:
        print("❌ GITHUB_TOKEN environment variable required")
        sys.exit(1)
    
    print("🚀 Starting Kubernetes Tools Discovery...")
    
    discovery = KubeToolsDiscovery(github_token)
    tools = discovery.search_new_tools(days_back=7)
    
    if discovery.save_results(tools):
        print(f"✅ Discovery complete! Found {len(tools)} tools")
    else:
        print("😴 No new tools discovered today")

if __name__ == "__main__":
    main()
