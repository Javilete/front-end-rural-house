define(['moment'],
    function (moment){

        var rhBookingController = function($scope, rhBookingService) {

            $scope.arrivalDate = moment().toDate();
            $scope.departureDate = moment().add(1, 'days').toDate();

            $scope.guests = [
                {name: 'one', value: 1},
                {name: 'two', value: 2},
                {name: 'three', value: 3},
                {name: 'four', value: 4},
                {name: 'five', value: 5},
                {name: 'six', value: 6},
                {name: 'seven', value: 7},
                {name: 'eight', value: 8},
                {name: 'nine', value: 9},
                {name: 'ten', value: 10},
                {name: 'eleven', value: 11},
                {name: 'twelve', value: 12}
            ];

            $scope.find = function() {
                rhBookingService.getAvailability($scope.arrivalDate, $scope.departureDate, $scope.guestsNumber.value).then(
                    function (availabilityList){
                        $scope.availability = availabilityList;
                    },
                    function () {
                        $scope.serverError = true;
                    }
                );
            }

        }

        rhBookingController.$inject = ['$scope', 'rhBookingService'];

        return rhBookingController;
    }
)