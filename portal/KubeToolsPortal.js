import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

// Kubernetes Logo SVG Component
const KubernetesLogo = () => (
  <svg width="40" height="40" viewBox="0 0 256 249" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <g>
      <path d="M82.0851613,244.934194 C76.1393548,244.934194 70.523871,242.291613 66.5767742,237.501935 L8.99483871,165.896774 C5.0283871,161.10129 3.06580645,155.370323 3.72903226,149.494194 L15.1851613,59.8283871 C15.8483871,53.9329032 19.0954839,48.6580645 24.0606452,45.3625806 L102.738065,3.72258065 C105.354839,2.15096774 108.230968,1.27741935 111.230968,1.06451613 L111.230968,1.06451613 C111.722581,1.02096774 112.214194,1 112.696774,1 L143.303226,1 C143.785806,1 144.27742,1.02096774 144.760968,1.06451613 C147.760968,1.27741935 150.636129,2.15096774 153.252903,3.72258065 L231.930323,45.3625806 C236.895484,48.6580645 240.142581,53.9329032 240.805807,59.8283871 L252.261935,149.494194 C252.925161,155.370323 250.962581,161.10129 247.005161,165.896774 L189.414194,237.501935 C185.476129,242.291613 179.860645,244.934194 173.905807,244.934194 L82.0851613,244.934194" fill="#326DE6"></path>
      <path d="M128,171.982545 C104.230154,171.982545 84.8993409,152.65077 84.8993409,128.882545 C84.8993409,105.114319 104.230154,85.7731636 128,85.7731636 C151.769846,85.7731636 171.100659,105.114319 171.100659,128.882545 C171.100659,152.65077 151.769846,171.982545 128,171.982545 M128,75.7818182 C98.6310832,75.7818182 74.9090909,99.5038105 74.9090909,128.882545 C74.9090909,158.25128 98.6310832,182.974545 128,182.974545 C157.368917,182.974545 181.090909,158.25128 181.090909,128.882545 C181.090909,99.5038105 157.368917,75.7818182 128,75.7818182" fill="#FFFFFF"></path>
    </g>
  </svg>
);

// Main App Component
export default function KubeToolsPortal() {
  // State for the tools data
  const [tools, setTools] = useState([]);
  // State for categories
  const [categories, setCategories] = useState([]);
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  // State for votes
  const [votes, setVotes] = useState({});
  
  // Fetch and organize the data
  useEffect(() => {
    // Sample data based on the repository
    const toolsData = [
      {
        name: "kubetail",
        description: "Bash script to tail Kubernetes logs from multiple pods at the same time",
        url: "https://github.com/johanhaleby/kubetail",
        stars: 2312,
        category: "Pods"
      },
      {
        name: "kube-s3",
        description: "Kubernetes pods using shared S3 storage",
        url: "https://github.com/freegroup/kube-s3",
        stars: 127,
        category: "Pods"
      },
      {
        name: "kubectl-ports-rs",
        description: "A kubectl krew plugin to provide a list of exposed ports on kubernetes Pod resources",
        url: "https://github.com/widnyana/kubectl-ports-rs",
        stars: 48,
        category: "Pods"
      },
      {
        name: "Istio",
        description: "Connect, secure, control, and observe services",
        url: "https://github.com/istio/istio",
        stars: 31800,
        category: "Service Mesh"
      },
      {
        name: "Traefik",
        description: "The Cloud Native Edge Router",
        url: "https://github.com/containous/traefik",
        stars: 19500,
        category: "Service Mesh"
      },
      {
        name: "NGINX Ingress Controller",
        description: "NGINX and NGINX Plus Ingress Controllers for Kubernetes",
        url: "https://github.com/nginxinc/kubernetes-ingress",
        stars: 4850,
        category: "Service Mesh"
      },
      {
        name: "Nos",
        description: "Run AI workloads on Kubernetes",
        url: "https://github.com/nebuly-ai/nos",
        stars: 1320,
        category: "Machine Learning/Deep Learning"
      },
      {
        name: "Kubeflow",
        description: "Machine Learning Toolkit for Kubernetes",
        url: "https://github.com/kubeflow/kubeflow",
        stars: 12300,
        category: "Machine Learning/Deep Learning"
      },
      {
        name: "Volcano",
        description: "A Kubernetes Native Batch System",
        url: "https://github.com/volcano-sh/volcano",
        stars: 2870,
        category: "Machine Learning/Deep Learning"
      },
      {
        name: "KubeEdge",
        description: "Kubernetes Native Edge Computing Framework",
        url: "https://github.com/kubeedge/kubeedge",
        stars: 5670,
        category: "Compute Edge Tools"
      },
      {
        name: "OpenYurt",
        description: "Extending your native Kubernetes to edge",
        url: "https://github.com/openyurtio/openyurt",
        stars: 1250,
        category: "Compute Edge Tools"
      },
      {
        name: "k8sgpt",
        description: "Giving Kubernetes SRE superpowers to everyone",
        url: "https://github.com/k8sgpt-ai/k8sgpt",
        stars: 2870,
        category: "Artificial Intelligence"
      },
      {
        name: "kubectl-ai",
        description: "Kubectl plugin for OpenAI GPT",
        url: "https://github.com/sozercan/kubectl-ai",
        stars: 1450,
        category: "Artificial Intelligence"
      },
      {
        name: "kube-fledged",
        description: "A Kubernetes add-on for creating and managing a cache of container images directly on the cluster nodes",
        url: "https://github.com/senthilrch/kube-fledged",
        stars: 384,
        category: "Caching"
      },
      {
        name: "Harbor",
        description: "A trusted cloud native registry project that stores, caches, signs, and scans content",
        url: "https://github.com/goharbor/harbor",
        stars: 18900,
        category: "Caching"
      },
      {
        name: "Knative Serving",
        description: "Kubernetes-based, scale-to-zero, request-driven compute",
        url: "https://github.com/knative/serving",
        stars: 4560,
        category: "Function as a Service FaaS"
      },
      {
        name: "OpenFaaS",
        description: "Serverless Functions Made Simple",
        url: "https://github.com/openfaas/faas",
        stars: 21300,
        category: "Function as a Service FaaS"
      }
    ];
    
    setTools(toolsData);
    
    // Extract unique categories
    const uniqueCategories = ['All', ...new Set(toolsData.map(tool => tool.category))];
    setCategories(uniqueCategories);
    
    // Initialize votes
    const initialVotes = {};
    toolsData.forEach(tool => {
      initialVotes[tool.name] = 0;
    });
    setVotes(initialVotes);
  }, []);
  
  // Filter tools based on selected category and search query
  const filteredTools = tools.filter(tool => {
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Handle vote
  const handleVote = (toolName) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [toolName]: prevVotes[toolName] + 1
    }));
  };
  
  // Format stars count for display
  const formatStars = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header with Kubernetes Logo */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <KubernetesLogo />
            <h1 className="text-2xl font-bold">KubeTools Portal</h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-6">
            <div className="flex items-center bg-white rounded-full shadow overflow-hidden">
              <div className="px-3 py-2">
                <Search size={20} className="text-blue-600" />
              </div>
              <input
                type="text"
                placeholder="Search Kubernetes tools..."
                className="flex-1 py-2 px-2 outline-none text-gray-700"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="text-sm">
            <span className="font-medium">A curated collection of Kubernetes tools</span>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar for Categories */}
        <div className="w-64 bg-white shadow-lg p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
            <span className="w-1 h-6 bg-blue-600 rounded mr-2"></span>
            Categories
          </h2>
          <ul className="space-y-1">
            {categories.map(category => (
              <li key={category} className="mb-2">
                <button
                  className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white font-medium shadow-md' 
                      : 'hover:bg-blue-50 text-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            {/* Title */}
            <div className="flex items-center mb-6 pb-3 border-b border-gray-200">
              <h1 className="text-2xl font-bold text-gray-800">
                {selectedCategory === 'All' ? 'All Kubernetes Tools' : `${selectedCategory} Tools`}
              </h1>
              <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-medium py-1 px-2 rounded-full">
                {filteredTools.length} tools
              </span>
            </div>
            
            {/* Table of Tools */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
                      Tool
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
                      Stars
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
                      Votes
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b-2 border-gray-300">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTools.map((tool) => (
                    <tr key={tool.name} className="hover:bg-blue-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
                            {tool.name.substring(0, 1).toUpperCase()}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                {tool.name}
                              </a>
                            </div>
                            <div className="text-xs text-gray-500">{tool.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-800">{tool.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm font-medium">
                          <svg className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-gray-800">{formatStars(tool.stars)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {votes[tool.name]} votes
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleVote(tool.name)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                        >
                          Vote Up
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Display message if no tools match the filters */}
            {filteredTools.length === 0 && (
              <div className="text-center py-12 px-4">
                <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">No tools found</h3>
                <p className="mt-2 text-sm text-gray-500">
                  No tools match your current search criteria. Try adjusting your search or browse a different category.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-4 text-center text-sm">
        <p>? 2025 KubeTools - A curated list of Kubernetes tools</p>
      </footer>
    </div>
  );
}