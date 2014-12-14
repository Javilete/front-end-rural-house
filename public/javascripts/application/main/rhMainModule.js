define([
        'angular',
        './rhMainRoutes',
        './rhTranslatorProvider',
        './rhMainMenuController',
        '../utils/translationTable_EN',
        '../utils/translationTable_ES'
    ],
    function (
        angular,
        rhMainRoutes,
        rhTranslatorProvider,
        rhMainMenuController,
        translationTable_EN,
        translationTable_ES
    ) {

        var rhMainModule = angular.module('rh.main', ['ui.router', 'pascalprecht.translate'] );

        rhMainModule.config(rhTranslatorProvider);
        rhMainModule.config(rhMainRoutes);

        rhMainModule.constant('translationEN', translationTable_EN);
        rhMainModule.constant('translationES', translationTable_ES);

        rhMainModule.controller('rhMainMenuController', rhMainMenuController);

        return rhMainModule;
    }
)