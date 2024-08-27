#!/bin/bash
VERSION=1.2.4
docker build -t boodskapiot/website:$VERSION -t boodskapiot/website:latest .
docker push boodskapiot/website:$VERSION
docker push boodskapiot/website:latest
