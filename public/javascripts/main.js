require.config(buildRequireConfig());

require([
        'jquery',
        'angular',
        'angularUIStates',

        'application/home/rhHomeModule'
    ],
    function ($, angular) {
        console.log('bootstrapping');

        angular.element(document).ready(function () {
            angular.bootstrap(document, [
                'rh.home'
            ]);
        });
    });
