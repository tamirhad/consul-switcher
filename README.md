# consul-switcher
Fun POC i got from my ex-manager to practice some DevOps skills.
in this demo we will be able add/delete dockerized nodeJS backend servers from HAProxy within a click of a button using Consul service mesh capabilitis(KV Store and DNS interface).
## architecture
To achieve this goal i used few components:
1. [Consul](https://www.consul.io/)
2. Consul-temaplte engine
3. Docker and docker-compose
4. HAProxy
5. Vagrant
6. NodeJS
7. registrator
Lets start from inside out:
I wrote simple(and ugly :p) NodeJS code and dockerized it, the image will emulate simple http server, the servers are speaking with Consul API for scale up/down the service(=changing values in Consul KV store).
to acheive scaling up and down within a click of a button, ive used docker-compose to make a service, than i used the --scale flag.
Consul-template is watching for KV changes inside Consul and updating the HAproxy template and executing the docker-compose sacling script with every change.
registrator job is to register each new container into Consul as an instance of our service.
HAproxy is installed on the machine as a service and configured to serve on port 80 at the front-end and being updated with backend servers from Consul-template, in addition to that, load-balacing mechnisem and frond-end port can be configured from the KV store. 
All of the componenets are instlled inside Vagrant machine for best compability in the future.


## Demo
Just instll [Vagrant](https://www.vagrantup.com/) and lets go!

```
vagrant up
```
navigate into: http://172.20.20.10:8500 to see the Consul UI.
navigate into: http://172.20.20.10 to access our service through HAproxy.
