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
    public static Result home() {
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

    public static Result routes() {
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
}
