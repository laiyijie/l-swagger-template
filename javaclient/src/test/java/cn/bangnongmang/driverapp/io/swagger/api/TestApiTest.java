package cn.bangnongmang.driverapp.io.swagger.api;

import cn.bangnongmang.driverapp.io.swagger.ApiClient;
import cn.bangnongmang.driverapp.io.swagger.model.TestResponse;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for TestApi
 */
public class TestApiTest {

    private TestApi api;

    @Before
    public void setup() {
        api = new ApiClient().createService(TestApi.class);
    }

    
    /**
     * 测试接口
     *
     * 
     */
    @Test
    public void testInfoGetTest() {
        String word = null;
        // TestResponse response = api.testInfoGet(word);

        // TODO: test validations
    }
    
}
