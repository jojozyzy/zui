#!/bin/bash

echo "Before Script: `pwd`"

cd "$(dirname "$0")"
echo "cd: `pwd`"

cd ../;
wait

if [ -n "$TRAVIS" ]; then
echo "Installing Yogi"
    npm -g install yogi -loglevel silent
    cd src
    echo "building entire library with yogi";
    yogi build --no-lint --cache
else
    echo "no make....";
fi
