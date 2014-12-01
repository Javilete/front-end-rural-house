define([
        'angular',
        './rhHomeRoutes',
        './rhHomeController',
        './rhFeaturesController'
    ],
    function (angular, rhHomeRoutes, rhHomeController, rhFeaturesController) {

        var rhHomeModule = angular.module('rh.home', ['ui.router'] );

        rhHomeModule.config(rhHomeRoutes);

        rhHomeModule.controller('rhHomeController', rhHomeController);
        rhHomeModule.controller('rhFeaturesController', rhFeaturesController);

        return rhHomeModule;
    }
)