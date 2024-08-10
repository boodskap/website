#!/bin/bash
VERSION=1.1.9
docker build -t boodskapiot/website:$VERSION .
docker push boodskapiot/website:$VERSION
