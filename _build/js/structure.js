const $ = require('jquery');
const tweenMax = require('gsap');




$("#menu-toggle").click((e)=> {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
