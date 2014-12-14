define([
    
],
    function() {

        var rhRoutesRoutes = function ($stateProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);

            $stateProvider
                .state('routes',{
                    abstract: true,
                    url: '/routes',
                    parent: 'main',
                    templateUrl: 'partials/routes/main',
                    controller: 'rhRoutesController'
                })
                .state('routes.route1', {
                    url: '/route1',
                    templateUrl: 'partials/routes/route1',
                    controller: 'rhRoute1Controller'
                });
//                .state('routes.pictures', {
//                    url: '/pictures',
//                    templateUrl: 'partials/routes/pictures',
//                    controller: 'rhPicturesController'
//                }).
//                state('routes.booking', {
//                    url: '/booking',
//                    templateUrl: 'partials/routes/booking',
//                    controller: 'rhBookingController'
//                }).
//                state('routes.getThere', {
//                    url: '/getThere',
//                    templateUrl: 'partials/routes/getThere',
//                    controller: 'rhGetThereController'
//                });
        }

        rhRoutesRoutes.$inject = ['$stateProvider', '$locationProvider'];

        return rhRoutesRoutes;
    }
)