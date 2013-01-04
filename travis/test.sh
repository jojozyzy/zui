#!/bin/bash

root=`pwd`
yogi=`which yogi`

echo "Build Root: ${root}"
echo "yogi: ${yogi}"
echo "PhantomJS: `phantomjs -v`"

echo "Running Tests.."

cd ${root}/src
echo "cd ${root}/src"
con=""
timeout=""
cli=""
extra=""

if [ -n "$TRAVIS" ]; then
    con="-c 8 "
    timeout="-t 500 "
fi

args="${timeout}${con}${extra}"
echo "yogi test ${args}"
${yogi} test ${args}
