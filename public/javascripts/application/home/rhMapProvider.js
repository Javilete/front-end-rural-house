define([

],
    function() {

        var rhMapProvider = function(uiGmapGoogleMapApiProvider) {

            uiGmapGoogleMapApiProvider.configure({
                //    key: 'your api key',
                v: '3.17',
                libraries: 'weather,geometry,visualization'
            });
        }

        rhMapProvider.$inject = ['uiGmapGoogleMapApiProvider'];

        return rhMapProvider;

    }
)