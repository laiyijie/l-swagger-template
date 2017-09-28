#!/bin/sh
set -x
rm -rf javaclient
java -jar swagger-codegen-cli-laiyijie.jar generate -DuseRxJava=true -i main.yaml -l java -o ./javaclient -c ./codegen_config/javaclientconfig.json
rm -rf spring
java -jar swagger-codegen-cli-laiyijie.jar generate -i main.yaml -l spring -o ./spring -c ./codegen_config/springconfig.json
rm -rf objcclient
java -jar swagger-codegen-cli-laiyijie.jar generate -i main.yaml -l objc -o ./objcclient -c ./codegen_config/objcclientconfig.json
rm -rf jsclient
java -jar swagger-codegen-cli-laiyijie.jar generate -i main.yaml -l typescript-angular -o ./jsclient -c ./codegen_config/angularjsclientconfig.json
cnpm install 
tsc

