define([

    ],
    function() {

        var rhMainRoutes = function($stateProvider, $urlRouterProvider, $locationProvider){
            //$locationProvider.html5Mode(true);

            $urlRouterProvider
                .when('', ['$injector', function ($injector) {
                    if (window.location.pathname == '' || window.location.pathname == "/") {
                        $injector.get('$state').transitionTo('home.features');
                    } else {
                        $injector.get('$state').transitionTo('otherwise');
                    }

                }])
                .otherwise(function ($injector) {
                    $injector.get('$state').transitionTo('otherwise');
                });


            $stateProvider
                .state('main', {
                    abstract: true,
                    controller: 'rhMainMenuController',
                    templateUrl: 'partials/main/panel'//Here we include the ui-view for the content
                })
                .state('otherwise', {
                    templateUrl: '/partials/not_found/not_found'
                });

//            $stateProvider
//                .state('main',{
//                    abstract: true,
//                    url: '/home',
//                    templateUrl: 'partials/home/main',
//                    controller: 'rhHomeController'
//                })

        }

        rhMainRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

        return rhMainRoutes;

    }
)