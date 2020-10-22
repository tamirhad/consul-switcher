#!/usr/bin/env bash
NUMBER='curl -s http://172.20.20.10:8500/v1/kv/scale | jq -r '.[].Value' | base64 --decode'
SERVICE='curl -s http://172.20.20.10:8500/v1/kv/service_name | jq -r '.[].Value' | base64 --decode'
eval "$NUMBER"
docker-compose -f /labs/docker-compose.yml scale $(eval "$SERVICE")=$(eval "$NUMBER")
exit 0
