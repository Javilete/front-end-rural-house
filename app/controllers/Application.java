package controllers;

import play.mvc.Controller;
import play.mvc.Result;
import views.html.index;

public class Application extends Controller {

    public static Result index() {
        return ok(index.render());
    }

/*********************  HOME ******************************/
    public static Result homeMain() {
        return ok(views.html.partials.home.main.render());
    }

    public static Result homeFeatures() {
        return ok(views.html.partials.home.features.render());
    }

    public static Result homePictures() {
        return ok();
    }

    public static Result homeBooking() {
        return ok();
    }

    public static Result homeGetThere() {
        return ok();
    }
/********************* END HOME ******************************/
}
