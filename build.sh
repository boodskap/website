#!/bin/bash
VERSION=1.2.4
docker build -t boodskapiot/website:$VERSION .
docker push boodskapiot/website:$VERSION
