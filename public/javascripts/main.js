require.config(buildRequireConfig());

require([
          'jquery'
        , 'angular'
        , 'lodash'
        , 'angularUIStates'
        , 'angularTranslate'
        , 'restangular'
        , 'moment'
//        , 'angularGoogleMaps'

        , 'application/main/rhMainModule'
        , 'application/home/rhHomeModule'
        , 'application/routes/rhRoutesModule'
        , 'application/contactUs/rhContactUsModule'
        , 'application/comments/rhCommentsModule'
    ],
    function ($, angular) {
        console.log('booooootstrapping');

        angular.element(document).ready(function () {
            angular.bootstrap(document, [
                  'rh.main'
                , 'rh.home'
                , 'rh.routes'
                , 'rh.contactUs'
                , 'rh.comments'
            ]);
        });
    });
