package utils.configuration;

public class TooDeepConfigurationException extends RuntimeException {
    public TooDeepConfigurationException(){
        super("Trying to convert to deep configuration into JSON. This is most probably caused by trying to convert non-config map.");
    }
}