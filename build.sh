#!/bin/bash
VERSION=1.2.5
docker build -t boodskapiot/website:$VERSION -t boodskapiot/website:latest .
docker push boodskapiot/website:$VERSION
docker push boodskapiot/website:latest
