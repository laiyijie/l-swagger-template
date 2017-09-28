# BJTestApi

All URIs are relative to *http://work.laiyijie.me:36512/server/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testInfoGet**](BJTestApi.md#testinfoget) | **GET** /test/info | 测试接口


# **testInfoGet**
```objc
-(NSURLSessionTask*) testInfoGetWithWord: (NSString*) word
        completionHandler: (void (^)(BJTestResponse* output, NSError* error)) handler;
```

测试接口

### Example 
```objc

NSString* word = @"word_example"; // 你想说的话

BJTestApi*apiInstance = [[BJTestApi alloc] init];

// 测试接口
[apiInstance testInfoGetWithWord:word
          completionHandler: ^(BJTestResponse* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling BJTestApi->testInfoGet: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **word** | **NSString***| 你想说的话 | 

### Return type

[**BJTestResponse***](BJTestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

