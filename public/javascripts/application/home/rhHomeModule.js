define([
        'angular',
        './rhHomeRoutes'
    ],
    function (angular, rhHomeRoutes) {

        var rhHomeModule = angular.module('rh.home', ['ui.router'] );

        rhHomeModule.config(rhHomeRoutes);

        return rhHomeModule;
    }
)