const menu = document.querySelector('.mobile_menu');
const menuButton = document.querySelector('.mobile_menu_trigger');
const bg = document.querySelector('.bg');
let blocked = false;
let justHovered = false;
let menuIsShown = false;

menuButton.addEventListener('click', function() {
    if(!menuIsShown) {
        bg.style.height = "550px";
        menuIsShown = true;
    } else {
        bg.style.height = "230px";
        menuIsShown = false;
    }
})

/* menuButton.addEventListener('mouseover', function () {
    if(!justHovered && !menuIsShown) {
        menuIsShown = true;
        justHovered = true;
        menuButton.click();
        blocked = true;
        bg.style.height = "400px"
        setTimeout(function(){
            blocked = false;
        },500);
    }
    setTimeout(function(){
        justHovered = false;
    }, 500)
});

menu.addEventListener('mouseleave', function () {
    if(menuIsShown) {
        document.querySelector('.menu-close').click();
        bg.style.height = "230px";
        menuIsShown = false;
    }
}); */



//SEARCH

const searchBtn = document.querySelector(".search input");
const input = document.querySelector(".search_input input");
const form = document.querySelector("#form-search");
const modMenu = document.querySelector(".mod_mobile_menu");
const  hasFocus = document.hasFocus;

searchBtn.addEventListener('mouseover', function () {
    input.classList.add("focus");
    modMenu.style.marginRight ="20px";
});

input.addEventListener("keyup", function (){
     if(input.value !== "" ) {
         input.focus();
   } else {
         input.blur();
   }
})

form.addEventListener('mouseleave', function () {
    input.classList.remove("focus");
    /*modMenu.style.marginRight ="50px";*/
    if(document.hasFocus) {
        console.log("test");
        /*input.classList.remove("focus");
        modMenu.style.marginRight ="50px";*/
    }
});

// SEARCH MOBILE
const submitBtn = document.querySelector(" .mod_form.mobile .search input");
const searchBtnMobile = document.querySelector(".mod_form.mobile .btn-submit");
const inputMobile = document.querySelector(".mod_form.mobile .search_input input");
let searchBarOpen = false;

searchBtnMobile.addEventListener('click', function () {
    if(!searchBarOpen) {
        submitBtn.style.display ="block";
        inputMobile.classList.add("focus");
        searchBarOpen = true;
    } else {
        submitBtn.style.display ="none";
        inputMobile.classList.remove("focus");
        searchBarOpen = false;
    }
});



// Mobile Menu Effect
const mobileMenu = document.querySelector("#mobile-menu-14");
const bannerImage = document.querySelector(".banner_image")
let teaser;
let teaserNew;
if(document.querySelector(".teaser-text")) {
    teaser = document.querySelector(".teaser-text")
}
const MobileTrigger = document.querySelector("#mobile-menu-14-trigger")

if(document.querySelector(".teaser-beratung.new")) {
    teaserNew = document.querySelector(".teaser-beratung.new")
}

MobileTrigger.addEventListener('click' , () => {
    if(mobileMenu.classList.contains('active')) {
        bannerImage.classList.add("menu-active");
        if(teaser) {
            teaser.classList.add("mobile");
        }
        MobileTrigger.style.opacity = "0"
        if(teaserNew) {
            teaserNew.classList.add("mobile");
        }
    }
    else {
        bannerImage.classList.remove("menu-active");
        if(teaser) {
            teaser.classList.remove("mobile");
        }
        MobileTrigger.style.opacity = "1";
        if(teaserNew) {
            teaserNew.classList.remove("mobile");
        }
    }
})





