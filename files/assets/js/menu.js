const menu = document.querySelector('.mobile_menu');
const menuButton = document.querySelector('.mobile_menu_trigger');
const bg = document.querySelector('.bg');
/*const wrapper = document.querySelector('#wrapper');*/
console.log(menuButton);
let blocked = false;
menuButton.addEventListener('mouseover', function () {
    console.log("fa");
    menuButton.click();
    blocked = true;
    bg.style.height = "400px"
    setTimeout(function(){
        blocked = false;
    },500);
});
menu.addEventListener('mouseout', function () {
    console.log("test");
    if(!blocked) {
        document.querySelector('.menu-close').click();
        bg.style.height = "160px"
    }
});


