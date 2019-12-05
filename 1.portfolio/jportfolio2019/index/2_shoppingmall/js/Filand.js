$(document).ready(function(){






    var $loginList = $('.login');
    var modalObj = $('.modal');

    console.log($loginList);

    $loginList.on('click',function(){
        modalObj.css('display', 'block');
    });
    modalObj.on('click',function(){
        modalObj.css('display', 'none');
    });





});




//메뉴 아이콘과 텍스트 두가지 클릭이벤드 
//chatcing target for click event 
var MenuIcon = document.querySelector('#navLeft img'); //Menu Icon
var Menutext = document.querySelector('#navLeft p'); //Menu text

//grab the DIV for showing according to click event
var nav = document.querySelector('nav');
var closeSpan = document.querySelector('#navLeft span');

//아이콘 클릭 nav보임/ close보임/ 메뉴아이콘 숨김
function MenuIconClick(){
    // alert('icon');
    nav.style.display = 'block';
    nav.classList.remove('closesmooth');
    closeSpan.style.display = 'block';
    MenuIcon.style.display = 'none';
    closeNavSpan.style.display = 'none'
}
function MenuTextClick(){
    // alert('text');
    nav.style.display = 'block';
    nav.classList.remove('closesmooth');
}
//클로우즈 클릭 nav숨김/ close숨김/ 메뉴아이콘 보임
function MenuClose(){
    nav.classList.add('closesmooth');
    closeSpan.style.display = 'none';
    MenuIcon.style.display = 'block';
}
MenuIcon.addEventListener('click', MenuIconClick);
closeSpan.addEventListener('click', MenuClose);

//grab close svg
var closeNavSpan = document.querySelector('nav span');
function MenuTextClick(){
    closeNavSpan.style.display = 'block'
    nav.style.display = 'block';
    nav.classList.remove('closesmooth');
}
function CloseClick(){
    nav.style.display = 'none';
}
Menutext.addEventListener('click', MenuTextClick);
closeNavSpan.addEventListener('click', CloseClick);
