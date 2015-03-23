package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

    /*********************  MAIN ******************************/
    public static Result main() {
        return ok(views.html.partials.main.panel.render());
    }

    /*********************  HOME ******************************/
    public static Result homeMain() {
        return ok(views.html.partials.home.main.render());
    }

    public static Result homeFeatures() {
        return ok(views.html.partials.home.features.render());
    }

    public static Result homePictures() {
        return ok(views.html.partials.home.pictures.render());
    }

    public static Result homeBooking() {
        return ok(views.html.partials.home.booking.render());
    }

    public static Result homeGetThere() {
        return ok(views.html.partials.home.getThere.render());
    }
    /********************* END HOME ******************************/

    /*********************  ROUTES ******************************/

    public static Result routesMain() {
        return ok(views.html.partials.routes.main.render());
    }

    public static Result routesRoute0() {
        return ok(views.html.partials.routes.route0.render());
    }

    public static Result routesRoute1() {
        return ok(views.html.partials.routes.route1.render());
    }

    public static Result routesRoute2() {
        return ok(views.html.partials.routes.route2.render());
    }

    public static Result routesRoute3() {
        return ok(views.html.partials.routes.route3.render());
    }

    public static Result routesRoute4() {
        return ok(views.html.partials.routes.route4.render());
    }

    public static Result routesRoute5() {
        return ok(views.html.partials.routes.route5.render());
    }

    public static Result routesRoute6() {
        return ok(views.html.partials.routes.route6.render());
    }

    /*********************  END ROUTES ******************************/

    /*********************  COMMENTS ******************************/

    public static Result commentsMain() {

        return ok(views.html.partials.comments.main.render());

    }

    public static Result comments() {

        return ok(views.html.partials.comments.comments.render());
    }

    /******************* END  COMMENTS ****************************/


    /*********************  CONTACT-US ******************************/

    public static Result contactUsMain() {

        return ok(views.html.partials.contactUs.main.render());
    }

    public static Result contactUs() {

        return ok(views.html.partials.contactUs.contact_us.render());
    }

    /******************* END  CONTACT-US ****************************/
}
