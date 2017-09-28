#!/bin/sh

rm -rf jsclient
java -jar swagger-codegen-cli-laiyijie.jar generate -i main.yaml -l typescript-angular -o ./jsclient -c ./codegen_config/angularjsclientconfig.json
cnpm install 
tsc
npm version 1.0.$(date +%s)
npm login  <<EOF
bangnongmang
memeda00
huangxinhe@bangnongmang.cn
EOF
npm publish

