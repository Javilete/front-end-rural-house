define([

],
    function() {


        var required = function (object, fields) {

            fields.forEach(function (name) {
                if (angular.isUndefined(object[name]) || object[name] == null) {
                    throw name + " is required";
                }
            });

        };

        var BookingEnquiryBuilder = function () {

            return {
                arrivingDate: null,
                departingDate: null,
                guests: null,

                setArrivingDate: function(arrDate) {
                    this.arrivingDate = arrDate;
                    return this;
                },

                setDepartingDate: function(deptDate) {
                    this.departingDate = deptDate;
                    return this;
                },

                setGuests: function(guests) {
                    this.guests = guests;
                    return this;
                },

                build: function () {
                    required(this, ['arrivingDate', 'departingDate', 'guests']);
                    return {
                        "arrivingDate": this.arrivingDate,
                        "departingDate": this.departingDate,
                        "guests": this.guests
                    };
                }
            }
        }

        return BookingEnquiryBuilder;
    }
);