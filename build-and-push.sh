#!/bin/bash
API_LOCATION=${1:-./api}
CLIENT_LOCATION=${2:-./client}
ROUTER_LOCATION=${2:-./router}

WORK_DIR=${PWD}
cd $API_LOCATION;
mvn clean package;
docker build -t ravjot28/canadian-english-atlas-api .;

cd $WORK_DIR;

cd $CLIENT_LOCATION;
docker build -t ravjot28/canadian-english-atlas-client .;

cd $WORK_DIR;

cd $ROUTER_LOCATION;
docker build -t ravjot28/canadian-english-atlas-router .;

docker push ravjot28/canadian-english-atlas-api;
docker push ravjot28/canadian-english-atlas-client;
docker push ravjot28/canadian-english-atlas-router;


