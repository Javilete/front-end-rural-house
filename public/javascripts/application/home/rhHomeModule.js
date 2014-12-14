define([
        'angular'
        , './rhHomeRoutes'
        , './rhHomeController'
        , './rhFeaturesController'
        , './rhBookingController'
        , './rhPicturesController'
        , './rhGetThereController'
    ],
    function (
        angular
        , rhHomeRoutes
        , rhHomeController
        , rhFeaturesController
        , rhBookingController
        , rhPicturesController
        , rhGetThereController
    ) {

        var rhHomeModule = angular.module('rh.home', ['ui.router', 'uiGmapgoogle-maps'] );

        rhHomeModule.config(rhHomeRoutes);
        rhHomeModule.config(function(uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                //    key: 'your api key',
                v: '3.17',
                libraries: 'weather,geometry,visualization'
            });
        })

        rhHomeModule.controller('rhHomeController', rhHomeController);
        rhHomeModule.controller('rhFeaturesController', rhFeaturesController);
        rhHomeModule.controller('rhBookingController', rhBookingController);
        rhHomeModule.controller('rhPicturesController', rhPicturesController);
        rhHomeModule.controller('rhGetThereController', rhGetThereController);

        return rhHomeModule;
    }
)