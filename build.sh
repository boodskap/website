#!/bin/bash
VERSION=1.2.2
docker build -t boodskapiot/website:$VERSION .
docker push boodskapiot/website:$VERSION
