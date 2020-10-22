consul {
  address = "172.20.20.10:8500"

  retry {
    enabled  = true
    attempts = 12
    backoff  = "250ms"
  }
}
template {
  source      = "/labs/load-balancer.conf.ctmpl"
  destination = "/etc/haproxy/haproxy.cfg"
  perms       = 0600
  command     = "systemctl reload haproxy"
}
template {
  source      = "/labs/docker-compose.ctmpl"
  destination = "/labs/docker-compose.yml"
  perms       = 0600
  command     = "/labs/test.sh"
}
