#!/bin/bash

echo "Starting a Travis Build"

#mimic Travis env
export TRAVIS=true
export TRAVIS_NODE_VERSION=0.8

cd "$(dirname "$0")"
pwd
cd ../
pwd
./travis/before.sh
wait
./travis/test.sh
