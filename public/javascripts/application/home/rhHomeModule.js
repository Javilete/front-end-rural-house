define([
        'angular'
        , './rhHomeRoutes'
//        , './rhMapProvider'
        , './rhHomeController'
        , './rhFeaturesController'
        , './rhBookingController'
        , './rhPicturesController'
        , './rhGetThereController'
        , './rhBookingService'
    ],
    function (
        angular
        , rhHomeRoutes
//        , rhMapProvider
        , rhHomeController
        , rhFeaturesController
        , rhBookingController
        , rhPicturesController
        , rhGetThereController
        , rhBookingService
    ) {

        var rhHomeModule = angular.module('rh.home', ['ui.router']);//, 'uiGmapgoogle-maps'] );

        rhHomeModule.config(rhHomeRoutes);
//        rhHomeModule.config(rhMapProvider);

        rhHomeModule.controller('rhHomeController', rhHomeController);
        rhHomeModule.controller('rhFeaturesController', rhFeaturesController);
        rhHomeModule.controller('rhBookingController', rhBookingController);
        rhHomeModule.controller('rhPicturesController', rhPicturesController);
        rhHomeModule.controller('rhGetThereController', rhGetThereController);

        rhHomeModule.factory('rhBookingService', rhBookingService);

        return rhHomeModule;
    }
)