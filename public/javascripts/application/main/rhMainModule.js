define([
        'angular',
        './rhMainRoutes',
        './rhTranslatorProvider',
        './rhMainMenuController',
        '../utils/translationTable_EN',
        '../utils/translationTable_ES',
        '../utils/rhConfig',
        '../utils/rhServiceRestangularConfig',
        '../utils/rhBookingEnquiryBuilder'
    ],
    function (
        angular,
        rhMainRoutes,
        rhTranslatorProvider,
        rhMainMenuController,
        translationTable_EN,
        translationTable_ES,
        rhConfig,
        rhServiceRestangularConfig,
        rhBookingEnquiryBuilder
    ) {

        var rhMainModule = angular.module('rh.main', ['ui.router', 'restangular', 'pascalprecht.translate'] );

        rhMainModule.config(rhTranslatorProvider);
        rhMainModule.config(rhMainRoutes);

        rhMainModule.constant('translationEN', translationTable_EN);
        rhMainModule.constant('translationES', translationTable_ES);

        rhMainModule.controller('rhMainMenuController', rhMainMenuController);

        rhMainModule.factory('rhConfig', rhConfig);
        rhMainModule.factory('rhServiceRestangular', rhServiceRestangularConfig);
        rhMainModule.factory('rhBookingEnquiryBuilder', rhBookingEnquiryBuilder);


        return rhMainModule;
    }
)