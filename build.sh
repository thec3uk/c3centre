#!/usr/bin/env bash

npm install
gem install compass
gulp build
hugo
