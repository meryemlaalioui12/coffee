let HOME1 = document.querySelector(".HOME1");
let MENU1 = document.querySelector(".MENU1");
let OUR_STORY = document.querySelector(".OUR_STORY");
let CONTACT = document.querySelector(".CONTACT");
let ORDER_NOW = document.querySelector(".ORDER_NOW");
let LOGIN = document.querySelector(".LOGIN");
let main_text = document.querySelector(".main-text");
let main_order = document.querySelector(".main-order");
let features = document.querySelector(".features"); 
let order = document.getElementById('Order');
let View = document.getElementById('View');
const Order1 = document.getElementById('Order1');
let Order2 = document.getElementById('Order2');
let Order3 = document.getElementById('Order3');
let Order4 = document.getElementById('Order4');
const menuphone = document.querySelector(".menuphone");
const menuPh = document.querySelector(".menu-ph");

HOME1.addEventListener("click", function(){
    HOME1.classList.add("active");
    MENU1.classList.remove("active");
    OUR_STORY.classList.remove("active");
    CONTACT.classList.remove("active");
    ORDER_NOW.classList.remove("active");
    LOGIN.classList.remove("active");
});
MENU1.addEventListener("click", function(){
    HOME1.classList.remove("active");
    MENU1.classList.add("active");
    OUR_STORY.classList.remove("active");
    CONTACT.classList.remove("active");
    ORDER_NOW.classList.remove("active");
    LOGIN.classList.remove("active");
});
OUR_STORY.addEventListener("click", function(){
    HOME1.classList.remove("active");
    MENU1.classList.remove("active");
    OUR_STORY.classList.add("active");
    CONTACT.classList.remove("active");
    ORDER_NOW.classList.remove("active");
    LOGIN.classList.remove("active");
});
CONTACT.addEventListener("click", function(){
    HOME1.classList.remove("active");
    MENU1.classList.remove("active");
    OUR_STORY.classList.remove("active");
    CONTACT.classList.add("active");
    ORDER_NOW.classList.remove("active");
    LOGIN.classList.remove("active");

});
View.addEventListener("click", function(){
    window.location.href = 'view.html';
});
order.addEventListener("click", function(){
    window.location.href = 'order.html';
});



const links = document.querySelectorAll(".menu-head a");

window.addEventListener("scroll", function() {

    if (window.scrollY < 600) {
        setActive("HOME1");
    }
    else if (window.scrollY < 1400) {
        setActive("MENU1");
    }
    else if (window.scrollY < 1900) {
        setActive("OUR_STORY");
    }
    else {
        setActive("CONTACT");
    }

});

function setActive(className) {

    links.forEach(function(link) {
        link.classList.remove("active");
    });

    document.querySelector("." + className).classList.add("active");
}




menuphone.addEventListener("click", function() {
    menuPh.classList.toggle("show");
});


const Links = document.querySelectorAll(".menu-ph a");

window.addEventListener("scroll", function() {

    if (window.scrollY < 600) {
        setActive("HOME2");
    }
    else if (window.scrollY < 1400) {
        setActive("MENU2");
    }
    else if (window.scrollY < 2400) {
        setActive("OUR_STORY2");
    }
    else {
        setActive("CONTACT2");
    }

});

function setActive(className) {

    Links.forEach(function(link) {
        link.classList.remove("active");
    });

    document.querySelector("." + className).classList.add("active");
}


