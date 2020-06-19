var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location = /** @class */ (function () {
    function Location(name, address, city, zip, image) {
        this.name = "";
        this.address = "";
        this.city = "";
        this.zip = "";
        this.image = "";
        this.name = name;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.image = image;
    }
    Location.prototype.display = function () {
        return "<br>Name: " + this.name + " <br> Address: " + this.address + "," + this.city + ", " + this.zip + "<br> " + this.image + "<br>";
    };
    ;
    return Location;
}());
;
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, address, city, zip, image, telNumber, cuisine, web) {
        var _this = _super.call(this, name, address, city, zip, image) || this;
        _this.telNumber = "";
        _this.cuisine = "";
        _this.web = "";
        _this.telNumber = telNumber;
        _this.cuisine = cuisine;
        _this.web = web;
        return _this;
    }
    ;
    Restaurant.prototype.displayR = function () {
        return _super.prototype.display.call(this) + "<br> Tel: " + this.telNumber + " <br> Type of food: " + this.cuisine + "<br> Website: " + this.web + "<hr>";
    };
    ;
    return Restaurant;
}(Location));
;
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, address, city, zip, image, EventDate, EventTime) {
        var _this = _super.call(this, name, address, city, zip, image) || this;
        _this.EventDate = "";
        _this.EventTime = "";
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        return _this;
    }
    ;
    Events.prototype.displayE = function () {
        return _super.prototype.display.call(this) + "<br> Date: " + this.EventDate + " <br> Time: " + this.EventTime + "<hr>";
    };
    ;
    return Events;
}(Location));
;
/* *************************This creates the Places part*************************** */
var place = new Array();
place[0] = new Location('Augarten', 'Taborstrasse', 'Vienna', '1020', 'img/augarten.jpg');
place[1] = new Location('Karlskirche', 'Karlsplatz 1', 'Vienna', '1010', 'img src = img/karlskirche.jpg');
$("#wrapper").append("<div class =\"location d-flex flex-row\"></div><img " + i + "><br>");
$("#wrapper1").append("<div class=\"restaurant d-flex flex-row\"></div><br>");
$("#wrapper2").append("<div class=\"events d-flex flex-row\"></div><br>");
for (var i = 0; i < place.length; i++) {
    $(".location").append("" + place[i].display());
}
/* *************************This creates the restaurant part*************************** */
var restaurant = new Array();
restaurant[0] = new Restaurant('Lalibela', 'Schulgasse 7', "Vienna", "1180", "img", "0664 8700351", "Ethiopian", "http://www.ethiopian-restaurant.at/");
restaurant[1] = new Restaurant("Sri Thai", "Baumgasse 18", "Vienna", "1030", "img", "0676 7079296", "Thai", "https://www.sri-thai-imbiss.at/");
for (var i = 0; i < restaurant.length; i++) {
    $(".restaurant").append("" + restaurant[i].displayR());
}
/* *************************This creates the events part*************************** */
var event = new Array();
event[0] = new Events("Vienna Gin Festival", "Lehargasse 6", "Vienna", "1060", "img", "16.10.2020 - 17.10.2020", "16:00-22:00");
event[1] = new Events("Tech Jobs Fair Vienna", "Wollzeile 27a", "Vienna", "1010", "img", "26.11.2020", "14:00-20:00");
for (var i = 0; i < event.length; i++) {
    $(".events").append("" + event[i].displayE());
}
