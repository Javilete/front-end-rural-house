require.config(buildRequireConfig());

require([
          'jquery'
        , 'angular'
        , 'angularUIStates'
        , 'angularTranslate'

        , 'application/main/rhMainModule'
        , 'application/home/rhHomeModule'
        , 'application/routes/rhRoutesModule'
    ],
    function ($, angular) {
        console.log('bootstrapping');

        angular.element(document).ready(function () {
            angular.bootstrap(document, [
                  'rh.main'
                , 'rh.home'
                , 'rh.routes'
            ]);
        });
    });
