"use strict";
exports.__esModule = true;
var TestApi = (function () {
    function TestApi($http, $httpParamSerializer, basePath) {
        this.$http = $http;
        this.$httpParamSerializer = $httpParamSerializer;
        this.basePath = 'http://work.laiyijie.me:36512/server/api/v1/';
        this.defaultHeaders = {};
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }
    TestApi.prototype.testInfoGet = function (word, extraHttpRequestParams) {
        var localVarPath = this.basePath + '/test/info';
        var queryParameters = {};
        var headerParams = Object.assign({}, this.defaultHeaders);
        if (word === null || word === undefined) {
            throw new Error('Required parameter word was null or undefined when calling testInfoGet.');
        }
        if (word !== undefined) {
            queryParameters['word'] = word;
        }
        var httpRequestParams = {
            method: 'GET',
            url: localVarPath,
            params: queryParameters,
            headers: headerParams
        };
        if (extraHttpRequestParams) {
            httpRequestParams = Object.assign(httpRequestParams, extraHttpRequestParams);
        }
        return this.$http(httpRequestParams);
    };
    TestApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
    return TestApi;
}());
exports.TestApi = TestApi;
//# sourceMappingURL=TestApi.js.map