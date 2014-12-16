define([

],
    function(){
        var rhMainMenuController = function($scope, $state, $translate) {

            $scope.setLanguage = function(language) {
                console.log(language);
                $translate.use(language);
            }

            $scope.goToHome = function() {
                $state.go('home.features');
            }

            $scope.goToRoutes = function() {
                $state.go('routes.route0');
            }

        }

        rhMainMenuController.$inject = ['$scope', '$state', '$translate'];

        return rhMainMenuController;
    }
)