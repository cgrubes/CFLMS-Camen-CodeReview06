class Location {
    name = "";
    address = "";
    city = "";
    zip = "";
    image="";
    constructor(name, address, city, zip, image) {
        this.name= name;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.image = image;
    }

    display() {
        return `<br>${this.name}<br> Address: ${this.address},${this.city}, ${this.zip}<br> ${this.image}<br>`;
    };

   
};


class Restaurant extends Location {
    telNumber = "";
    cuisine = "";
    web = "";

    constructor(name, address, city, zip,image,telNumber, cuisine,web) {
        super(name, address, city, zip, image);
        this.telNumber = telNumber;
        this.cuisine = cuisine;
        this.web = web;
    };

    displayR() {
        return `${super.display()}<br> Tel: ${this.telNumber} <br> Type of food: ${this.cuisine}<br> Website: ${this.web}<hr>`
    };
};

class Events extends Location {
    EventDate = "";
    EventTime = "";
    
    constructor(name,address, city, zip,image,EventDate, EventTime) {
        super(name, address, city, zip, image);
        this.EventDate = EventDate;
        this.EventTime = EventTime;
    
    };

    displayE() {
        return `${super.display()}<br> Date: ${this.EventDate} <br> Time: ${this.EventTime}<hr>`
    };
};

/* *************************create divs within wrapper*************************** */
$("#wrapper").append(`<div class ="location d-flex flex-row flex-wrap"></div><div class="row"></div><div class="col sm-12 md-6 lg-3></div><div class = ${i}</div><br>`);
$("#wrapper1").append(`<div class="restaurant d-flex flex-row flex-wrap"></div><div class="row"></div><div class="col sm-12 md-6 lg-3></div><br>`);
$("#wrapper2").append(`<div class="events d-flex flex-row flex-wrap"></div><div class="row"></div><div class="col sm-12 md-6 lg-3></div><br>`)

/* *************************This creates the Places part*************************** */
let place:any = new Array();
place[0] = new Location('Augarten', 'Taborstrasse', 'Vienna', '1020', '<img src = img/augarten.jpg>');
place[1] = new Location('Karlskirche', 'Karlsplatz 1', 'Vienna', '1010', '<img src = img/karlskirche.jpg>');



for (let i=0; i<place.length; i++){
    $(".location").append(`${place[i].display()}`)
}

/* *************************This creates the restaurant part*************************** */
let restaurant:string = new Array();
restaurant[0] = new Restaurant('Lalibela', 'Schulgasse 7', "Vienna", "1180", "<img src = img/lalibela.jpg>", "0664 8700351", "Ethiopian", "http://www.ethiopian-restaurant.at/");
restaurant[1] = new Restaurant("Sri Thai", "Baumgasse 18", "Vienna", "1030", "<img src = img/srithai.jpg>", "0676 7079296", "Thai", "https://www.sri-thai-imbiss.at/");

for (let i=0; i<restaurant.length; i++){
    $(".restaurant").append(`${restaurant[i].displayR()}`)
}

/* *************************This creates the events part*************************** */
let event:string=new Array();
event[0] = new Events("Vienna Gin Festival", "Lehargasse 6", "Vienna", "1060", "<img src = img/gin,jpg.jpg>", "16.10.2020 - 17.10.2020", "16:00-22:00");
event[1] = new Events("Tech Jobs Fair Vienna", "Wollzeile 27a", "Vienna", "1010", "<img src = img/tech.jpg>", "26.11.2020", "14:00-20:00");

for (let i=0; i<event.length; i++){
    $(".events").append(`${event[i].displayE()}`)
}

