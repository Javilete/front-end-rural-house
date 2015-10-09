define([
    'angular'
    , './rhCommentsRoutes'
    , './rhCommentsController'
    , './rhCommentsService'
],
    function(
        angular
        , rhCommentsRoutes
        , rhCommentsController
        , rhCommentsService
    ) {

        var rhCommentsModule = angular.module('rh.comments', ['ui.router']);

        rhCommentsModule.config(rhCommentsRoutes);

        rhCommentsModule.controller('rhCommentsController', rhCommentsController);

        rhCommentsModule.factory('rhCommentsService', rhCommentsService);

        return rhCommentsModule;

    }
)