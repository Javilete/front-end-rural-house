package utils.configuration;

import java.util.ArrayList;
import java.util.Map;


public class ConfigurationToJsonConverter {
    private static final int MAX_CONFIG_DEPTH = 10;

    private static JSONObject buildJsonFromMap(Map<String, Object> rootMap, int depth) throws JSONException {
        if(depth >= MAX_CONFIG_DEPTH){
            throw new TooDeepConfigurationException();
        }

        JSONObject jsonObject = new JSONObject();

        for (Map.Entry<String, Object> entry : rootMap.entrySet()) {
            if(entry.getValue() instanceof String){
                jsonObject.accumulate(entry.getKey(), entry.getValue());
            } else if(entry.getValue() instanceof Map){
                jsonObject.accumulate(entry.getKey(), buildJsonFromMap((Map<String, Object>)entry.getValue(), depth + 1));
            } else if(entry.getValue() instanceof ArrayList) {
                JSONArray jsonArray = new JSONArray(entry.getValue().toString());
                jsonObject.accumulate(entry.getKey(), jsonArray);
            } else if(entry.getValue() instanceof Integer) {
                jsonObject.accumulate(entry.getKey(), entry.getValue());
            } else if(entry.getValue() instanceof Boolean) {
                jsonObject.accumulate(entry.getKey(), entry.getValue());
            }else if(entry.getValue() instanceof Double){
                jsonObject.accumulate(entry.getKey(), entry.getValue());
            } else {
                throw new IllegalArgumentException("Configuration map does not support type: (" + entry.getValue().getClass().getName()+")");
            }
        }

        return jsonObject;
    }

    public static JSONObject convertMapToJson(Map<String, Object> configMap) throws JSONException {
        return buildJsonFromMap(configMap, 0);
    }
}