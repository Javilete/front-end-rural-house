var buildRequireConfig = function() {

    // Paths used for both app and tests
    var config = {
        paths: {
              'jquery': 'lib/jquery/dist/jquery.min'
            , 'angular': 'lib/angular/angular.min'
            , 'lodash': 'lib/lodash/dist/lodash.min'
            , 'angularUIStates': 'lib/angular-ui-router/release/angular-ui-router.min'
            , 'angularTranslate': 'lib/angular-translate/angular-translate.min'
            , 'angularGoogleMaps': 'lib/angular-google-maps/dist/angular-google-maps.min'

            , 'rhApp': 'application'
        },
        shim: {
            'angular': {
                'deps': ['jquery'],
                'exports': 'angular'
            },
            'angularUIStates': ['angular'],
            'angularTranslate': ['angular'],
            'angularGoogleMaps': ['angular', 'lodash']
        },
        priority: ['angular'],
        baseUrl : "/assets/javascripts"
    };

    return config;
}