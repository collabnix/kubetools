# Kubetools - A Curated List of Kubernetes Tools
![Image](https://raw.githubusercontent.com/collabnix/kubetools/master/img/kubetool.jpg) 

There are more than 200+ Kubernetes Certified Service Providers and tons of distributions. Choosing a right distribution can be a daunting task. Kubetools is built with a purpose. It is contributed and managed by [Collabnix community](https://collabnix.com) to target the most popular tools and technique and coming up with the best practices around these tools. 

Currently, we are maintaining a database of 200+ Kubernetes tools but there is a plan to take it to next step and help you pick up the most popular tool for your infrastructure.

Have Questions? Join us over [Slack](https://launchpass.com/collabnix) and get chance to be a part of 5500+ DevOps enthusiasts.<br>
Want to contribute? Click [here](https://github.com/collabnix/kubetools/pulls) and get your favorite tool added.


## Cluster Management

kops - [Production Grade K8s Installation, Upgrades, and Management](https://github.com/kubernetes/kops)<br>
Kube-ops-view - [Kubernetes Operational View - read-only system dashboard for multiple K8s clusters](https://github.com/hjacobs/kube-ops-view)<br>
kubeprompt - [Kubernetes prompt info](https://github.com/jlesquembre/kubeprompt)<br>
Metalk8s - [An opinionated Kubernetes distribution with a focus on long-term on-prem deployments](https://github.com/scality/metalk8s)<br>
kind - [Kubernetes IN Docker - local clusters for testing Kubernetes](https://github.com/kubernetes-sigs/kind)<br>
Clusterman - [Cluster Autoscaler for Kubernetes and Mesos](https://github.com/Yelp/clusterman)<br>
Cert-manager - [Automatically provision and manage TLS certificates](https://github.com/jetstack/cert-manager)<br>
Goldilocks - [Get your resource requests "Just Right"](https://github.com/FairwindsOps/goldilocks)<br>
katafygio - [Dump, or continuously backup Kubernetes objets as yaml files in git](https://github.com/bpineau/katafygio)<br>
Rancher - [Complete container management platform](https://github.com/rancher/rancher)<br>
Sealed Secrets - [A Kubernetes controller and tool for one-way encrypted Secrets](https://github.com/bitnami-labs/sealed-secrets)<br>
OpenKruise/Kruise - [Automate application workloads management on Kubernetes https://openkruise.io](https://github.com/openkruise/kruise)<br>
kubectl snapshot - [Take Cluster Snapshots](https://github.com/fbrubbo/kubectl-snapshot)<br>
kapp - [simple deployment tool focused on the concept of "Kubernetes application" — a set of resources with the same label https://get-kapp.io](https://github.com/k14s/kapp)<br>
keda - [Event-driven autoscaler for Kubernetes](https://keda.sh)<br>
Octant - [To better understand the complexity of Kubernetes clusters](https://github.com/vmware-tanzu/octant)<br>
Portainer - [Portainer inside a Kubernetes environment](https://github.com/portainer/k8s)<br>

## Cluster with Core CLI tools

Bootkube - [bootkube - Launch a self-hosted Kubernetes cluster](https://github.com/kubernetes-sigs/bootkube) <br>
kubectx + kubens - [Switch faster between clusters and namespaces in kubectl](https://github.com/ahmetb/kubectx)<br>
kube-shell - [Kubernetes shell: An integrated shell for working with the Kubernetes](https://github.com/cloudnativelabs/kube-shell)<br>
kuttle: kubectl wrapper for sshuttle without SSH - [Kubernetes wrapper for sshuttle](https://github.com/kayrus/kuttle)<br>
kubectl sudo - [Run kubernetes commands with the security privileges of another user](https://github.com/postfinance/kubectl-sudo)<br>
K9s - [Kubernetes CLI To Manage Your Clusters In Style!](https://github.com/derailed/k9s) <br>
Ktunnel - [A cli that exposes your local resources to kubernetes](https://github.com/omrikiei/ktunnel?utm_sq=g93l33gmsu)<br>
KubeOperator - [Run kubectl command in Web Browser. https://kubeoperator.io/](https://github.com/KubeOperator/webkubectl)<br>
Vimkubectl - [Manage any Kubernetes resource from Vim https://www.vim.org/scripts/script.ph](https://github.com/rottencandy/vimkubectl)<br>
KubeHelper - [KubeHelper - simplifies many daily Kubernetes cluster tasks through a web interface.](https://github.com/KubeHelper/kubehelper)<br>

## Alert and Monitoring

Thanos - [Highly available Prometheus setup with long term storage capabilities. CNCF Sandbox project. https://thanos.io
](https://github.com/thanos-io/thanos)<br>
Prometheus - [The Prometheus monitoring system and time series database.](https://github.com/prometheus/prometheus) <br>
Grafana - [The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More](https://github.com/grafana/grafana)  <br>
Kubetail - [Bash script to tail Kubernetes logs from multiple pods at the same time](https://github.com/johanhaleby/kubetail) <br>
Searchlight - [Alerts for Kubernetes](https://github.com/searchlight/searchlight)<br>
linkerd2 Monitoring Mixin for Grafana - [Grafana dashboards for linkerd2 monitoring and can work in standalone (default) or in multi cluster setup](https://github.com/andrew-waters/linkerd2-mixin)<br>
kuberhaus - [Kubernetes resource dashboard with node/pod layout and resource requests](https://github.com/stevelacy/kuberhaus)<br>
Kubernetes Job/CronJob Notifier - [This tool sends an alert to slack whenever there is a Kubernetes cronJob/Job failure/success](https://github.com/sukeesh/k8s-job-notify)<br>
Argus - [This tool monitors changes in the filesystem on specified paths](https://clustergarage.io/argus/docs/overview)<br>

## Logging and Tracing
Jaeger - [CNCF Jaeger, a Distributed Tracing Platform](https://github.com/jaegertracing/jaeger)<br>
Kiali - [Kiali project, observability for the Istio service mesh](https://github.com/kiali/kiali) <br>
ELK - [Elasticsearch, Logstash, Kibana](https://github.com/elastic)<br>
fluentbit - [Fast and Lightweight Log processor and forwarder for Linux, BSD and OSX](https://github.com/fluent/fluent-bit)<br>
Loki - [Like Prometheus, but for logs](https://github.com/grafana/loki)<br>

## Troubleshooting
Kubectl-debug - [Allows you to run a new container with all the troubleshooting tools installed in running pod for debugging purpose](https://github.com/aylei/kubectl-debug)<br>
PowerfulSeal - [A powerful testing tool for Kubernetes clusters](https://github.com/bloomberg/powerfulseal)<br>
Crash-diagnostic - [Crash-Diagnostics is a tool to help investigate, analyze, and troubleshoot unresponsive or crashed Kubernetes clusters](https://github.com/vmware-tanzu/crash-diagnostics)<br>
K9s - [Kubernetes CLI To Manage Your Clusters In Style!](https://github.com/derailed/k9s)<br>
Kubernetes CLI Plugin - Doctor - [kubectl cluster triage plugin for k8s - 🏥 (brew doctor equivalent)](https://github.com/emirozer/kubectl-doctor)<br>
Knative Inspect - [A light-weight debugging tool for Knative's system components](https://github.com/nimakaviani/knative-inspect)<br>
Kubeman - [To find information from Kubernetes clusters, and to investigate issues related to Kubernetes and Istio](https://github.com/walmartlabs/kubeman)<br>
kpexec - [kpexec is a kubernetes cli that runs commands in a container with high privileges](https://github.com/ssup2/kpexec)<br>

## Developement Tools/Kit

Okteto: A Tool for Cloud Native Developers - [Build better applications by developing and testing your code directly in Kubernetes](https://github.com/okteto/okteto)<br>
Tilt: Tilt manages local development instances for teams that deploy to Kubernetes - [Local Kubernetes development with no stress](https://github.com/windmilleng/tilt)<br>
Garden: Kubernetes from source to finish - [Development orchestrator for Kubernetes, containers and functions.](https://github.com/garden-io/garden)<br>
KuberNix - [Single dependency Kubernetes clusters for local testing, experimenting and development](https://github.com/saschagrunert/kubernix)<br>
Copper - [A configuration file validator for Kubernetes](https://github.com/cloud66-oss/copper?utm_sq=g93mop70o8)<br>
ko - [Build and deploy Go applications on Kubernetes](https://github.com/google/ko)<br>
Dekorate - [Java annotation processors for Kubernetes](https://github.com/dekorateio/dekorate)<br>
Tilt - [Local Kubernetes development with no stress https://tilt.dev/](https://github.com/windmilleng/tilt)<br>
Lens IDE [The Kubernetes IDE](https://k8slens.dev/)<br>
Kosko - [Organize Kubernetes manifests in JavaScript](https://kosko.dev/)<br>

## Alternative Tools for Developement

KubeSphere - [Easy-to-use Production Ready Container Platform https://kubesphere.io](https://github.com/kubesphere/kubesphere)<br>
skippbox - [A Desktop application for k8s](https://github.com/skippbox/skippbox)<br>
kind - [Kubernetes IN Docker - local clusters for testing Kubernetes https://kind.sigs.k8s.io/](https://github.com/kubernetes-sigs/kind)<br>
k3d - [k3d is a lightweight wrapper to run k3s (Rancher Lab’s minimal Kubernetes distribution) in docker.](https://k3d.io)<br>

## CI/CD integration Tools

HybridK8s Droid - [Intelligence foor your favourite Delivery Platform](https://hybridk8s.tech) <br> 
Devtron - [Software Delivery Workflow for Kubernetes](https://github.com/devtron-labs/devtron) <br> 
Skaffold - [Easy and Repeatable Kubernetes Development](https://github.com/GoogleContainerTools/skaffold) <br>
Apollo - [Apollo - The logz.io continuous deployment solution over kubernetes](https://github.com/logzio/apollo)<br>
Helm Cabin - [Web UI that visualizes Helm releases in a Kubernetes cluster](https://github.com/Nick-Triller/helm-cabin)<br>
flagger - [Progressive delivery Kubernetes operator (Canary, A/B Testing and Blue/Green deployments)](https://github.com/weaveworks/flagger)<br>
Kubeform - [Kubernetes CRDs for Terraform providers https://kubeform.com](https://github.com/kubeform/kubeform)<br>
Spinnaker - [Spinnaker is an open source, multi-cloud continuous delivery platform for releasing software changes with high velocity and confidence. http://www.spinnaker.io/](https://github.com/spinnaker/spinnaker)<br>
werf - [GitOps tool to deliver apps to Kubernetes and integrate this process with GitLab and other CI tools](https://github.com/werf/werf)<br>
Flux - [GitOps Kubernetes operator](https://github.com/fluxcd/flux)<br>
Argo CD - [Declarative continuous deployment for Kubernetes](https://github.com/argoproj/argo-cd)<br>
Tekton - [A cloud native continuous integration and delivery (CI/CD) solution](https://github.com/tektoncd/pipeline)<br>
Jenkins X - [Jenkins X provides automated CI+CD for Kubernetes with Preview Environments on Pull Requests using Tekton, Knative, Lighthouse, Skaffold and Helm](https://github.com/jenkins-x/jx)<br>

## Security Tools

TerraScan - [Detect compliance and security violations across Infrastructure as Code to mitigate risk before provisioning cloud native infrastructure.](https://github.com/accurics/terrascan) <br>
klum - [Kubernetes Lazy User Manager](https://github.com/ibuildthecloud/klum)<br>
Kyverno - [Kubernetes Native Policy Management https://kyverno.io](https://github.com/nirmata/kyverno)<br>
kiosk - [kiosk office Multi-Tenancy Extension For Kubernetes - Secure Cluster Sharing & Self-Service Namespace Provisioning](https://github.com/kiosk-sh/kiosk)<br>
kube-bench - [CIS Kubernetes Benchmark tool](https://github.com/aquasecurity/kube-bench)<br>
kube-hunter - [Pentesting tool - Hunts for security weaknesses in Kubernetes clusters](https://github.com/aquasecurity/kube-hunter)<br>
kube-who-can - [Show who has RBAC permissions to perform actions on different resources in Kubernetes](https://github.com/aquasecurity/kubectl-who-can)<br>
starboard - [Kubernetes-native security toolkit](https://github.com/aquasecurity/starboard)<br>
Simulator - [Kubernetes Security Training Platform - Focussing on security mitigation](https://github.com/kubernetes-simulator/simulator)<br>
RBAC Lookup - [Easily find roles and cluster roles attached to any user, service account, or group name in your Kubernetes cluster https://fairwinds.com](https://github.com/FairwindsOps/rbac-lookup)<br>
Kubeaudit - [kubeaudit helps you audit your Kubernetes clusters against common security controls](https://github.com/Shopify/kubeaudit)<br>
Gangway - [An application that can be used to easily enable authentication flows via OIDC for a kubernetes cluster](https://github.com/heptiolabs/gangway)<br>
Audit2rbac - [Autogenerate RBAC policies based on Kubernetes audit logs](https://github.com/liggitt/audit2rbac)<br>
Chartsec - [Helm Chart security scanner](https://github.com/banzaicloud/chartsec)<br>
kubestriker - [Security Auditing tool](https://github.com/vchinnipilli/kubestriker)<br>
Datree - [CLI tool to prevent K8s misconfigurations by ensuring that manifests and Helm charts follow best practices as well as your organization’s policies](https://datree.io)<br>
Krane - [Kubernetes RBAC static Analysis & visualisation tool](https://github.com/appvia/krane)<br>

## Network Policies

trireme-kubernetes - [Aporeto integration with Kubernetes Network Policies](https://github.com/aporeto-inc/trireme-kubernetes)<br>
Calico - [Cloud native connectivity and network policy ](https://github.com/projectcalico/calico)<br>
kubepox - [Kubernetes network Policy eXploration tool](https://github.com/aporeto-inc/kubepox)<br>
kokotap - [Tools for kubernetes pod network tapping](https://github.com/redhat-nfvpe/kokotap)<br>
Submariner - [Connect all your Kubernetes clusters, no matter where they are in the world](https://github.com/submariner-io/submariner)<br>
egress-operator - [An operator to produce egress gateway pods and control access to them with network policies](https://github.com/monzo/egress-operator)<br>
kubefwd (Kube Forward) - [Bulk port forwarding Kubernetes services for local development ](https://github.com/txn2/kubefwd)<br>

## Testing Tools

k6 - [A modern load testing tool, using Go and JavaScript](https://github.com/loadimpact/k6) <br>
Network bandwith and load testing - [Test suite for Kubernetes](https://github.com/mrahbar/k8s-testsuite)<br>
test-infra - [Test infrastructure for the Kubernetes project](https://github.com/kubernetes/test-infra)<br>
kube-score - [Kubernetes object analysis with recommendations for improved reliability and security](https://github.com/zegl/kube-score)<br>
Litmus - [Cloud-Native Chaos Engineering; Kubernetes-Native Chaos Engineering; Chaos Engineering for Kubernetes](https://github.com/litmuschaos/litmus)<br>
PowerfulSeal - [A powerful testing tool for Kubernetes clusters](https://github.com/bloomberg/powerfulseal)<br>
kube-burner - [Kube-burner is a tool aimed at stressing kubernetes clusters](https://kube-burner.readthedocs.io/en/latest/)<br>

## Service Mesh

Istio - [Connect, secure, control, and observe services](https://github.com/istio/istio) <br>
Traefik - [The Cloud Native Edge Router](https://github.com/containous/traefik)<br> 
NGINX Ingress Controller - [NGINX and NGINX Plus Ingress Controllers for Kubernetes](https://github.com/nginxinc/kubernetes-ingress)<br>
Autopilot - [THE SERVICE MESH SDK](https://docs.solo.io/autopilot/latest)<br>
linkerd-config - [A Kubernetes controller that knows how to reconcile the Linkerd configuration](https://github.com/ihcsim/linkerd-config)<br>
Kong - [Kong for Kubernetes: the official Ingress Controller for Kubernetes](https://github.com/Kong/kubernetes-ingress-controller)<br>
OSM - [Open Service Mesh (OSM) is a lightweight, extensible, cloud native service mesh](https://github.com/openservicemesh/osm)<br>
Layer5 - [Layer5, the service mesh company, representing every service mesh](https://github.com/layer5io/layer5)<br>
Gloo Mesh - [The Service Mesh Orchestration Platform](https://github.com/solo-io/gloo-mesh)<br>


## Observability

Kubespy - [Tools for observing Kubernetes resources in real time](https://github.com/pulumi/kubespy) <br>
Popeye - [A Kubernetes cluster resource sanitizer](https://github.com/derailed/popeye) <br>
Stern - [Multi pod and container log tailing for Kubernetes](https://github.com/wercker/stern) <br>
Cri-tools - [CLI and validation tools for Kubelet Container Runtime Interface (CRI)](https://github.com/kubernetes-sigs/cri-tools) <br>
Kubebox - [Terminal and Web console for Kubernetes](https://github.com/astefanutti/kubebox) <br>
Kubewatch - [Watch k8s events and trigger Handlers](https://github.com/bitnami-labs/kubewatch) <br>
kube-state-metrics - [Add-on agent to generate and expose cluster-level metrics](https://github.com/kubernetes/kube-state-metrics)<br>
Sloop - [Kubernetes History Visualization](https://github.com/salesforce/sloop?utm_sq=g90yo8t8s1)<br>
kubectl tree 🎄 - [Kubectl plugin to observe object hierarchies through ownerReferences](https://github.com/ahmetb/kubectl-tree)<br>
chaoskube - [chaoskube periodically kills random pods in your Kubernetes cluster](https://github.com/linki/chaoskube)<br>
BotKube - [Helps you monitor your Kubernetes cluster(s), debug critical deployments and gives recommendations for standard practices](https://www.botkube.io/)<br>
Kubestone - [Kubestone is a benchmarking Operator that can evaluate the performance of Kubernetes installations](https://kubestone.io/en/latest)<br>
Chaos Mesh - [A Chaos Engineering Platform for Kubernetes](https://github.com/pingcap/chaos-mesh)<br>
Lemur - [LEMUR: Observability and Context](https://github.com/turbonomic/lemur)<br>
kubernetes-event-exporter - [Export Kubernetes events to multiple destinations with routing and filtering](https://github.com/opsgenie/kubernetes-event-exporter)<br>
Kubevious - [Kubevious provides a usable and highly graphical interface for Kubernetes](https://github.com/kubevious/kubevious)<br>

## Machine Learning/Deep Learning

Kubeflow - [Machine Learning Toolkit for Kubernetes](https://github.com/kubeflow/kubeflow)<br>
Volcano - [A Kubernetes Native Batch System](https://github.com/volcano-sh/volcano)<br>

## Compute Edge Tools

KubeEdge - [Kubernetes Native Edge Computing Framework](https://github.com/kubeedge/kubeedge) <br>
Kubeless - [Kubernetes Native Serverless Framework](https://github.com/kubeless/kubeless)<br>

## Kubernetes Tools for Specific Cloud

Kubernetes on AWS (kube-aws) - [A command-line tool to declaratively manage Kubernetes clusters on AWS](https://github.com/kubernetes-incubator/kube-aws) <br>
Draft: Streamlined Kubernetes Development - [A tool for developers to create cloud-native applications on Kubernetes](https://github.com/azure/draft)<br>
helm-ssm - [A low dependency tool for retrieving and injecting secrets from AWS SSM into Helm](https://github.com/totango/helm-ssm)<br>
Skupper - [Multicloud communication for Kubernetes](https://skupper.io/)<br>

## Storage Providers

ChubaoFS - [distributed file system and object storage](https://github.com/chubaofs/chubaofs) <br>
Longhorn - [Cloud-Native distributed block storage built on and for Kubernetes](https://github.com/longhorn/longhorn)<br>
OpenEBS - [Kubernetes native - hyperconverged block storage with multiple storage engines](https://github.com/openebs/openebs)<br>
Rook - [Storage Orchestration for Kubernetes](https://github.com/rook/rook)<br>
TiKV - [Distributed transactional key-value database](https://github.com/tikv/tikv)<br>
velero - [Backup and migrate Kubernetes applications and their persistent volumes](https://github.com/vmware-tanzu/velero)<br>
Vitess - [Vitess is a database clustering system for horizontal scaling of MySQL](https://github.com/vitessio/vitess)<br>
kaDalu - [A lightweight Persistent storage solution for Kubernetes / OpenShift using GlusterFS in background](https://github.com/kadalu/kadalu)<br>


## Multiple Tools Repo
Chaos Toolkit Kubernetes Support - [Kubernetes driver extension of the Chaos Toolkit probes and actions API](https://github.com/chaostoolkit/chaostoolkit-kubernetes)<br>
k14s - [Kubernetes Tools that follow Unix philosophy to be simple and composable](https://github.com/k14s)<br>
Pulumi - [Pulumi - Modern Infrastructure as Code. Any cloud, any language. Give your team cloud superpowers rocket https://www.pulumi.com](https://github.com/pulumi/pulumi)<br>

## Non-Categorize

Rudr - [A Kubernetes implementation of the Open Application Model specification](https://github.com/oam-dev/rudr) <br>
Keel - [Kubernetes Operator to automate Helm, DaemonSet, StatefulSet & Deployment updates](https://keel.sh) <br>
Cabin, the mobile app for Kubernetes - [The Mobile Dashboard for Kubernetes](https://github.com/bitnami-labs/cabin)<br>
Funktion - [CLI tool for working with funktion](https://github.com/funktionio/funktion)<br>
Alterant - [A simple Kubernetes configuration modifier](https://github.com/cloud66-oss/alterant)<br>
BUCK - [Brigade Universal Controller for Kubernetes](https://github.com/brigadecore/buck)<br>
kube-fledged - [A kubernetes add-on for creating and managing a cache of container images directly on the cluster worker nodes, so application pods start almost instantly](https://github.com/senthilrch/kube-fledged)<br>
Kubecost - [Cross-cloud cost allocation models for workloads running on Kubernetes](https://github.com/kubecost/cost-model)<br>
kpt - [toolkit to help you manage, manipulate, customize, and apply Kubernetes Resource configuration](https://github.com/GoogleContainerTools/kpt)<br>

## Maintainer

- [Apurva Bhandari](https://www.linkedin.com/in/apurvabhandari-linux/)
- [Ajeet Singh Raina](https://www.linkedin.com/in/ajeetsraina)

Last Updated: 13 July, 2021

## LICENSE 
[Apache License 2.0](./LICENSE)
