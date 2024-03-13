#!/usr/bin/env sh

#abort on errors
set -e

env PUBLIC_URL=https://peter-tillmann88.github.io npm run build

cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:peter-tillmann88/peter-tillmann88.github.io.git main


