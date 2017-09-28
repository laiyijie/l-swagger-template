#!/bin/sh
npm version 1.0.$(date +%s)
npm login  <<EOF
bangnongmang
memeda00
huangxinhe@bangnongmang.cn
EOF
npm publish

