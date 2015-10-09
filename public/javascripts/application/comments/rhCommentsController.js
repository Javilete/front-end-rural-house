define([

],
    function() {

        var rhCommentsController = function($scope, rhCommentsService) {

            $scope.reviews;

            function getReviewList() {
                rhCommentsService.getReviewList().then(
                    function (reviews) {
                        $scope.reviews = reviews;
                    },
                    function () {
                        $scope.serverError = true;
                    }
                );
            }

            getReviewList();
        }

        rhCommentsController.$inject = ['$scope', 'rhCommentsService'];

        return rhCommentsController;
    }
)