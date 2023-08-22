const menu = document.querySelector('.mobile_menu');
const menuButton = document.querySelector('.mobile_menu_trigger');
const bg = document.querySelector('.bg');
let blocked = false;

menuButton.addEventListener('mouseover', function () {
    menuButton.click();
    blocked = true;
    bg.style.height = "400px"
    setTimeout(function(){
        blocked = false;
    },500);
});
menu.addEventListener('mouseleave', function () {
    if(!blocked) {
        document.querySelector('.menu-close').click();
        bg.style.height = "160px"
    }
});

//SEARCH

const searchBtn = document.querySelector(".search input");
const input = document.querySelector(".search_input input");
const form = document.querySelector("#form-search");
const modMenu = document.querySelector(".mod_mobile_menu");

searchBtn.addEventListener('mouseover', function () {
    input.classList.add("focus");
    modMenu.style.marginRight ="20px"

});
form.addEventListener('mouseleave', function () {
    input.classList.remove("focus");
    modMenu.style.marginRight ="50px"
});

const mobileMenu = document.querySelector("#mobile-menu-14");
console.log(mobileMenu);
const bannerImage = document.querySelector(".banner_image")
const teaser = document.querySelector(".teaser-text")
const MobileTrigger = document.querySelector("#mobile-menu-14-trigger")
console.log(teaser);

MobileTrigger.addEventListener('click' , () => {
    if(mobileMenu.classList.contains('active')) {
        console.log("test");
        teaser.style.fontSize = "14px"
        bannerImage.classList.add("menu-active");
    }
})





