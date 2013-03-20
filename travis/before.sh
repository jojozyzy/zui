#!/bin/bash
YUIV=yui_3.9.0
GETYUI=1
echo "Before Script: `pwd`"

cd "$(dirname "$0")"
echo "cd: `pwd`"

cd ../;
wait

if [ -n "$TRAVIS" ]; then
    echo "Installing Yogi"
    npm -g install yogi@0.0.68 -loglevel silent
    cd src
    echo "building entire library with yogi";
    yogi build --no-lint --cache
    cd ..
    if [ "1" -eq "$GETYUI" ]; then
        echo "get last yui3 files for testing";
        wget http://yui.zenfs.com/releases/yui3/$YUIV.zip
        unzip $YUIV.zip yui/build/*
        mv yui/build/* build
    fi
else
    echo "no make....";
fi
