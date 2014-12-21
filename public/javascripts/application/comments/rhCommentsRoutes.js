define([

],
    function() {

        var rhCommentsRoutes = function ($stateProvider, $locationProvider) {
            //$locationProvider.html5Mode(true);

            $stateProvider
                .state('comments',{
                    abstract: true,
                    url: '/comments',
                    parent: 'main',
                    templateUrl: 'partials/comments/main'
                })
                .state('comments.main', {
                    url: '/main',
                    templateUrl: 'partials/comments/comments',
                    controller: 'rhCommentsController'
                });
        }

        rhCommentsRoutes.$inject = ['$stateProvider', '$locationProvider'];

        return rhCommentsRoutes;
    }
)