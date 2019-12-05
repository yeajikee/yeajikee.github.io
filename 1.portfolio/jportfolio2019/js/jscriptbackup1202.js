$(document).ready(function () {

    var eyeBall = document.getElementsByClassName('ball');
    // console.log({eyeBall});

    document.onmousemove = function () {
        var x = event.clientX * 100 / window.innerWidth + '%';
        var y = event.clientY * 100 / window.innerHeight + '%';
        // console.log(x+y);
        eyeBall[0].style.left = x;
        eyeBall[0].style.top = y;
        eyeBall[0].style.transform = 'translate(-' + x + ',-' + y + ')';

    }

    //work2-Editing design
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 1,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });





    /* showing works according to CLICK EVENT */

    const workList = document.querySelectorAll('.workMenu li');
    var work = document.querySelectorAll('#work article');
    // var workarray = Array.from(work);

    // var arrayWork = Array.from(work);
    // console.log(arrayWork);

    function ClickList() {
        var listidx = $(this).index();
        for (var i = 0; i < work.length; i++) {
            if (listidx === i) {

                work[i].style.display = 'block';
            } else {

                work[i].style.display = 'none';
            }
        }
    }
    workList.forEach(input => input.addEventListener('click', ClickList));


    var viewbtn = $('.EditingView');
    var popups = $('.popup').children();
    var modal = document.getElementsByClassName('modal');
    for (let i = 0; i < viewbtn.length; i++) {
        // console.log(popups.eq(i))
        
        viewbtn.eq(i).on('click', function () {
            modal[0].style.display = 'block';
            popups.eq(i).css('display', 'block');
        });
        popups.eq(i).on('click', function(){
            modal[0].style.display = 'none';
            popups.eq(i).css('display', 'none');

        });
    }
    // 질문 이너택스트 안됨.
    /*changing color according to offsetTop */
    function showNav() {
        const sidenavA = document.querySelectorAll('#sidenav li a');

        const nextChange = document.querySelector('#innerTextmenu span'); //innderhtml 할 태그

        for (var i = 0; i < sidenavA.length; i++) {
            if (window.scrollY > 250) {
                // sidenavA[i].classList.add('nextAnimation');
                sidenavA[i].classList.add('changeColor');
                nextChange.classList.add('nextAnimation');
                nextChange.classList.add('changetextColor');
                nextChange.innerHTML= '<span style="color: black;">work</span>';
            }
            else{
                // const sidenavA = document.querySelectorAll('#sidenav li a');
                sidenavA[i].classList.remove('changeColor');
                nextChange.classList.add('nextAnimation');
                nextChange.innerHTML= '<span style="color: white;">about</span>';
            }
        }
        for (var i = 0; i < sidenavA.length; i++) {
            if(window.scrollY > 4290 ){
                nextChange.classList.add('nextAnimation');
                nextChange.innerHTML= '<span style="color: white;">Top</span>';
                sidenavA[i].classList.remove('changeColor');
            }
        }   
        // console.log(window.scrollY);
    }
    window.addEventListener('scroll', showNav);

    // $(document).ready(function()
    //     {
    //         var elm = ".box";
    //         var arrelmTop = [];
    //         var $target = $(elm);    
    //         for( var i=0 ; i<$target.length ; i++ ){
    //             arrelmTop[i] = $target.eq(i).offset().top;
    //         }      
    //         // (index)에 위에 타켓 (디아비7개들어있는 인텍스값 들어감)
    //         $target.each(function (index) {             
    //             // 개별적으로 Wheel 이벤트 적용
    //             $(this).on("mousewheel DOMMouseScroll", function (e) {
    //                 e.preventDefault();
    //                 var delta = 0;
    //                 if (!event) event = window.event;
    //                 if (event.wheelDelta) {
    //                     delta = event.wheelDelta / 120;
    //                 } 
    //                 var moveTop = $(window).scrollTop(); //스크롤탑넣기 
    //                 var elmSelecter = $(elm).eq(index);//지금보는 것을 찍을수있음
    //                 // 마우스휠을 위에서 아래로
    //                 if (delta < 0) {
    //                     if (  arrelmTop[index+1] > 0 ) {
    //                         moveTop = arrelmTop[index+1];
    //                     }

    //                 // 마우스휠을 아래에서 위로
    //                 } else {
    //                     if (  arrelmTop[index-1] >= 0 ) {
    //                         moveTop = arrelmTop[index-1];
    //                     }
    //                 }
                    
    //                 // 화면 이동 0.8초(800)
    //                 $("html,body").stop().animate({
    //                     scrollTop: moveTop + 'px'
    //                 }, {
    //                     duration: 800, complete: function () {
    //                         console.log('완료');
    //                     }
    //                 });
    //             });
    //         });
    //     });



});