package cn.bangnongmang.driverapp.io.swagger.api;

import cn.bangnongmang.driverapp.io.swagger.CollectionFormats.*;

import rx.Observable;


import retrofit2.http.*;

import okhttp3.RequestBody;

import cn.bangnongmang.driverapp.io.swagger.model.TestResponse;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface TestApi {
  /**
   * 测试接口
   * 
   * @param word 你想说的话 (required)
   * @return Call&lt;TestResponse&gt;
   */
  @GET("test/info")
  Observable<TestResponse> testInfoGet(
    @retrofit2.http.Query("word") String word
  );

}
