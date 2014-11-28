var buildRequireConfig = function() {

    // Paths used for both app and tests
    var config = {
        paths: {
            'angular': 'lib/angular/angular.min',
            'angularUIStates': 'lib/angular-ui-router/release/angular-ui-router.min',
            'jquery': 'lib/jquery/jquery.min'
        },
        shim: {
            'angular': {'deps': ['jquery'], 'exports': 'angular'},
            'angularUIStates': ['angular']
        },
        baseUrl : "/assets/javascripts"
    };

    return config;
}