# consul-switcher
Fun POC i got from my ex-manager to practice some DevOps skills.
in this demo we will be able add/delete nodeJS backend servers within a click of a button.
## architecture
we will deploy lightweight [K3s](https://k3s.io/) cluster using [Footloose](https://github.com/weaveworks/footloose) with calico networking.
[Consul](https://www.consul.io/) server + agent deployed in our cluster for service-mesh.
we will populate the backend servers and HAproxy with values from its KV store and DNS.
V
## Demo
Just install [Footloose](https://github.com/weaveworks/footloose)+Docker and lets go!
for the ones who cant run footloose ive created Vagrant file, just install Vagrant and have fun.
```
chmod +x bootstrap.sh
./bootstrap.sh
# to ssh into node0(master):
sudo footloose ssh root@node0 -c /labs/footloose.yaml
# verify cluster is running:
kubectl get nodes
$ verify all pods are up and running:
kubectl get pods --all-namespaces
# verify calico networking is up, check routes are being leared by bird over tunnel0:
ip route
```
