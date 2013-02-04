#!/bin/bash
YUIV=yui_3.8.1
GETYUI=0
echo "Before Script: `pwd`"

cd "$(dirname "$0")"
echo "cd: `pwd`"

cd ../;
wait

if [ -n "$TRAVIS" ]; then
    echo "Installing Yogi"
    npm -g install yogi -loglevel silent
    if [ "1" -eq "$GETYUI" ]; then
        echo "get last yui3 files for testing";
        wget http://yui.zenfs.com/releases/yui3/$YUIV.zip
        unzip $YUIV.zip
        mv yui/build build
    fi
    cd src
    echo "building entire library with yogi";
    yogi build --no-lint --cache
else
    echo "no make....";
fi
