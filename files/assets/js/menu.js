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

// Mobile Menu Effect

const mobileMenu = document.querySelector("#mobile-menu-14");
const bannerImage = document.querySelector(".banner_image")
const teaser = document.querySelector(".teaser-text")
const MobileTrigger = document.querySelector("#mobile-menu-14-trigger")
const teaserNew = document.querySelector(".teaser-beratung.new");
console.log(teaserNew);

MobileTrigger.addEventListener('click' , () => {
    if(mobileMenu.classList.contains('active')) {
        bannerImage.classList.add("menu-active");
        teaser.classList.add("mobile");
        MobileTrigger.style.opacity = "0"
        teaserNew.setAttribute("id", "test")
    }
    else {
        bannerImage.classList.remove("menu-active");
        teaser.classList.remove("mobile");
        MobileTrigger.style.opacity = "1"
    }
})





