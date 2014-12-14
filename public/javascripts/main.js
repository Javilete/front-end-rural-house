require.config(buildRequireConfig());

require([
          'jquery'
        , 'angular'
        , 'lodash'
        , 'angularUIStates'
        , 'angularTranslate'
        , 'angularGoogleMaps'

        , 'application/main/rhMainModule'
        , 'application/home/rhHomeModule'
        , 'application/routes/rhRoutesModule'
    ],
    function ($, angular) {
        console.log('booooootstrapping');

        angular.element(document).ready(function () {
            angular.bootstrap(document, [
                  'rh.main'
                , 'rh.home'
                , 'rh.routes'
            ]);
        });
    });
