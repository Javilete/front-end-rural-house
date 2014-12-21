define([
    'angular'
    , './rhCommentsRoutes'
    , './rhCommentsController'
],
    function(
        angular
        , rhCommentsRoutes
        , rhCommentsController
    ) {

        var rhCommentsModule = angular.module('rh.comments', ['ui.router']);

        rhCommentsModule.config(rhCommentsRoutes);

        rhCommentsModule.controller('rhCommentsController', rhCommentsController);

        return rhCommentsModule;

    }
)