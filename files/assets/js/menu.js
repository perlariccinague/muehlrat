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
console.log(searchBtn);

searchBtn.addEventListener('mouseover', function () {
    input.style.display = "block";
    input.classList.add("focus");
    console.log("test");

});
form.addEventListener('mouseleave', function () {
    input.style.display = "none";
    input.classList.remove("focus");
});




