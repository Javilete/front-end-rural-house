var buildRequireConfig = function() {

    // Paths used for both app and tests
    var config = {
        paths: {
            'jquery': 'lib/jquery/dist/jquery.min',
            'angular': 'lib/angular/angular.min',
            'angularUIStates': 'lib/angular-ui-router/release/angular-ui-router.min',

            'rhApp': 'application'
        },
        shim: {
            'angular': {
                'deps': ['jquery'],
                'exports': 'angular'
            },
            'angularUIStates': ['angular']
        },
        priority: ['angular'],
        baseUrl : "/assets/javascripts"
    };

    return config;
}