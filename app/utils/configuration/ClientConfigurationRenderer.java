package utils.configuration;

import com.oracle.javafx.jmx.json.JSONException;
import play.Play;

import java.util.Map;

public class ClientConfigurationRenderer {

    private static final String CLIENT = "client";

    public static String renderClientConifgJson() throws JSONException {
        Map<String, Object> map = Play.application().configuration().asMap();
        return ConfigurationToJsonConverter.convertMapToJson((Map<String, Object>) map.get(CLIENT)).toString();
    }
}



