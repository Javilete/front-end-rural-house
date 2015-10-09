/**
 * Rural service restangular configuration.
 */
define(function() {
    var rhServiceRestangularConfig = function(rhConfig, restangular) {
        return restangular.withConfig(function(RestangularConfigurer){
            RestangularConfigurer.setBaseUrl(rhConfig.service.api.url);
        });
    }

    rhServiceRestangularConfig.$inject = ['rhConfig', 'Restangular'];

    return rhServiceRestangularConfig;
});