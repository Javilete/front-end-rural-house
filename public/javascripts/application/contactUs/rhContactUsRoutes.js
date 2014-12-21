define([

    ],
    function() {

        var rhContactUsRoutes = function ($stateProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);

            $stateProvider
                .state('contactUs',{
                    abstract: true,
                    url: '/contactUs',
                    parent: 'main',
                    templateUrl: 'partials/contactUs/main'
                })
                .state('contactUs.main', {
                    url: '/main',
                    templateUrl: 'partials/contactUs/contactUs',
                    controller: 'rhContactUsController'
                });
        }

        rhContactUsRoutes.$inject = ['$stateProvider', '$locationProvider'];

        return rhContactUsRoutes;
    }
)