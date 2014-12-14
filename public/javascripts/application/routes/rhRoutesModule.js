define([
        'angular',
        './rhRoutesRoutes'

],
    function(
        angular,
        rhRoutesRoutes
    ) {

        var rhRoutesModule = angular.module('rh.routes', ['ui.router'] );

        rhRoutesModule.config(rhRoutesRoutes);

        return rhRoutesModule;
    }
)