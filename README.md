# consul-switcher
Fun POC i got from my ex-manager to practice some DevOps skills.
in this demo we will be able add/delete nodeJS backend servers within a click of a button.
## architecture
we will deploy small k8s cluster using [Vagrant](https://www.vagrantup.com/) inside we will build lightweight Kubernets cluster using [K3s](https://k3s.io/) with calico on Docker+[Footloose](https://github.com/weaveworks/footloose) setup already in it(we need to save some memory after all :P).
[Consul](https://www.consul.io/) server + agent deployed in our cluster for service-mesh we will populate the backend servers and HAproxy with values from its KV store and DNS.
## Demo
Just instll [Vagrant](https://www.vagrantup.com/) and lets go!

```
vagrant up
```
