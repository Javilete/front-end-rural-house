define([

],
    function() {
        var rhTranslatorProvider = function ($translateProvider, translationEN, translationES) {

            $translateProvider.translations('en', translationEN);
            $translateProvider.translations('es', translationES);

            $translateProvider.preferredLanguage('es');

        }

        rhTranslatorProvider.$inject = ['$translateProvider', 'translationEN', 'translationES'];

        return rhTranslatorProvider;
    }
)