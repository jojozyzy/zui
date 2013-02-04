#!/bin/bash
YUIV=yui_3.8.1
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
    echo "get last yui3 files for testing";
    wget http://yui.zenfs.com/releases/yui3/$YUIV.zip
    unzip $YUIV.zip
    mv yui/build/* build
else
    echo "no make....";
fi
