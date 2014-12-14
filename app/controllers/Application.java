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
}
