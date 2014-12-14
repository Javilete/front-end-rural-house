define([
        'angular'
        , './rhHomeRoutes'
        , './rhHomeController'
        , './rhFeaturesController'
        , './rhBookingController'
    ],
    function (
        angular
        , rhHomeRoutes
        , rhHomeController
        , rhFeaturesController
        , rhBookingController
    ) {

        var rhHomeModule = angular.module('rh.home', ['ui.router'] );

        rhHomeModule.config(rhHomeRoutes);

        rhHomeModule.controller('rhHomeController', rhHomeController);
        rhHomeModule.controller('rhFeaturesController', rhFeaturesController);
        rhHomeModule.controller('rhBookingController', rhBookingController);

        return rhHomeModule;
    }
)