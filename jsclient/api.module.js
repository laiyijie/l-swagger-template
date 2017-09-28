"use strict";
exports.__esModule = true;
var api = require("./api/api");
var angular = require("angular");
var apiModule = angular.module('api', [])
    .service('TestApi', api.TestApi);
exports["default"] = apiModule;
//# sourceMappingURL=api.module.js.map