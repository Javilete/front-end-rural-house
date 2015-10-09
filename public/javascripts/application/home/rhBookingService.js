define([

],
    function() {

        var rhBookingService  = function(rhServiceRestangular, rhBookingEnquiryBuilder) {

            var bookingElement = rhServiceRestangular.all("booking");

            var getAvailability = function (arrivingDate, departingDate, guests) {
                var bookingEnquiry = rhBookingEnquiryBuilder
                    .setArrivingDate(arrivingDate)
                    .setDepartingDate(departingDate)
                    .setGuests(guests)
                    .build();

                return bookingElement.one('check').customPOST(bookingEnquiry);
            }

            return {
                getAvailability: getAvailability
            };

        };

        rhBookingService.$inject = ['rhServiceRestangular', 'rhBookingEnquiryBuilder'];

        return rhBookingService;
    }
);