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
        return `<br>Name: ${this.name} <br> Address: ${this.address},${this.city}, ${this.zip}<br> ${this.image}<br>`;
    };

    /* displayImg(){
        return `${this.image}`
    }; */
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

/* *************************This creates the Places part*************************** */
let place:any = new Array();
place[0] = new Location('Augarten', 'Taborstrasse', 'Vienna', '1020', 'img/augarten.jpg');
place[1] = new Location('Karlskirche', 'Karlsplatz 1', 'Vienna', '1010', 'img src = img/karlskirche.jpg');

$("#wrapper").append(`<div class ="location d-flex flex-row"></div><img ${i}><br>`);
$("#wrapper1").append(`<div class="restaurant d-flex flex-row"></div><br>`);
$("#wrapper2").append(`<div class="events d-flex flex-row"></div><br>`)

for (let i=0; i<place.length; i++){
    $(".location").append(`${place[i].display()}`)
}

/* *************************This creates the restaurant part*************************** */
let restaurant:string = new Array();
restaurant[0] = new Restaurant('Lalibela', 'Schulgasse 7', "Vienna", "1180", "img", "0664 8700351", "Ethiopian", "http://www.ethiopian-restaurant.at/");
restaurant[1] = new Restaurant("Sri Thai", "Baumgasse 18", "Vienna", "1030", "img", "0676 7079296", "Thai", "https://www.sri-thai-imbiss.at/");

for (let i=0; i<restaurant.length; i++){
    $(".restaurant").append(`${restaurant[i].displayR()}`)
}

/* *************************This creates the events part*************************** */
let event:string=new Array();
event[0] = new Events("Vienna Gin Festival", "Lehargasse 6", "Vienna", "1060", "img", "16.10.2020 - 17.10.2020", "16:00-22:00");
event[1] = new Events("Tech Jobs Fair Vienna", "Wollzeile 27a", "Vienna", "1010", "img", "26.11.2020", "14:00-20:00");

for (let i=0; i<event.length; i++){
    $(".events").append(`${event[i].displayE()}`)
}

