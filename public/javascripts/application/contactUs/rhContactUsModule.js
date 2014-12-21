define([
        'angular'
        , './rhContactUsRoutes'
        , './rhContactUsController'

    ],
    function(
        angular
        , rhContactUsRoutes
        , rhContactUsController
    ) {

        var rhContactUsModule = angular.module('rh.contactUs', ['ui.router'] );

        rhContactUsModule.config(rhContactUsRoutes);

        rhContactUsModule.controller('rhContactUsController', rhContactUsController);

        return rhContactUsModule;
    }
)