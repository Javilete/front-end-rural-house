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
                    templateUrl: 'partials/routes/main'
                })
                .state('routes.route0', {
                    url: '/route0',
                    templateUrl: 'partials/routes/route0'
                })
                .state('routes.route1', {
                    url: '/route1',
                    templateUrl: 'partials/routes/route1'
                })
                .state('routes.route2', {
                    url: '/route2',
                    templateUrl: 'partials/routes/route2'
                })
                .state('routes.route3', {
                    url: '/route3',
                    templateUrl: 'partials/routes/route3'
                })
                .state('routes.route4', {
                    url: '/route4',
                    templateUrl: 'partials/routes/route4'
                })
                .state('routes.route5', {
                    url: '/route5',
                    templateUrl: 'partials/routes/route5'
                })
                .state('routes.route6', {
                    url: '/route6',
                    templateUrl: 'partials/routes/route6'
                });
        }

        rhRoutesRoutes.$inject = ['$stateProvider', '$locationProvider'];

        return rhRoutesRoutes;
    }
)