require.config(buildRequireConfig());

require([
        'angular',
        'angularUIStates',
        'jquery'
    ],
    function ($, angular) {

        angular.element(document).ready(function () {
            angular.bootstrap(document, [
                'rhApp'
            ]);

        });
    });
