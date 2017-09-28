# TestApi

All URIs are relative to *http://work.laiyijie.me:36512/server/api/v1/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testInfoGet**](TestApi.md#testInfoGet) | **GET** test/info | 测试接口


<a name="testInfoGet"></a>
# **testInfoGet**
> TestResponse testInfoGet(word)

测试接口

### Example
```java
// Import classes:
//import cn.bangnongmang.driverapp.io.swagger.ApiException;
//import cn.bangnongmang.driverapp.io.swagger.api.TestApi;


TestApi apiInstance = new TestApi();
String word = "word_example"; // String | 你想说的话
try {
    TestResponse result = apiInstance.testInfoGet(word);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TestApi#testInfoGet");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **word** | **String**| 你想说的话 |

### Return type

[**TestResponse**](TestResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

