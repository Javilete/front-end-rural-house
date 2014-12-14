define([

],
    function(){

        var rhGetThereController = function($scope, uiGmapGoogleMapApi) {

            uiGmapGoogleMapApi.then(
                function(maps){
                    $scope.map = {
                        center: {
                            latitude: -34.397,
                            longitude: 150.644 },
                        zoom: 8
                    };
                }
            )


        }

        rhGetThereController.$inject = ['$scope', 'uiGmapGoogleMapApi'];

        return rhGetThereController;
    }
)