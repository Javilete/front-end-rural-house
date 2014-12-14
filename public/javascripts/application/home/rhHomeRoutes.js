define([

    ],
    function() {

        var rhHomeRoutes = function($stateProvider, $locationProvider){
            //$locationProvider.html5Mode(true);

            $stateProvider
                .state('home',{
                    abstract: true,
                    url: '/home',
                    parent: 'main',
                    templateUrl: 'partials/home/main',
                    controller: 'rhHomeController'
                })
                .state('home.features', {
                    url: '/features',
                    templateUrl: 'partials/home/features',
                    controller: 'rhFeaturesController'
                })
                .state('home.pictures', {
                    url: '/pictures',
                    templateUrl: 'partials/home/pictures',
                    controller: 'rhPicturesController'
                }).
                state('home.booking', {
                    url: '/booking',
                    templateUrl: 'partials/home/booking',
                    controller: 'rhBookingController'
                }).
                state('home.getThere', {
                    url: '/getThere',
                    templateUrl: 'partials/home/getThere',
                    controller: 'rhGetThereController'
                });
        }

        rhHomeRoutes.$inject = ['$stateProvider', '$locationProvider'];

        return rhHomeRoutes;

    }
)