define([

],
    function() {
        var rhReviewService  = function(rhServiceRestangular) {

            var reviewElement = rhServiceRestangular.all("review");

            var getReviewList = function () {
                return reviewElement.getList();
            }

            return {
                getReviewList: getReviewList
            };

        };

        rhReviewService.$inject = ['rhServiceRestangular'];

        return rhReviewService;

    }
)