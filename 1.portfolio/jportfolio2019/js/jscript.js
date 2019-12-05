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

    
    var allBox = ".sectionBox";

    var arrallBoxTop = [];
    var $target = $(allBox);    
    for( var i=0 ; i<$target.length ; i++ ){
        arrallBoxTop[i] = $target.eq(i).offset().top;
        console.log(arrallBoxTop[i]);
    }      
    // (index)에 위에 타켓 (section의 7개 들어있는 인텍스값 들어옴)
    $target.each(function (index) {             
        // 개별적으로 Wheel 이벤트 적용
        console.log("target==>"+index);
        
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            
            e.preventDefault(); // 기능만 사용하지못하게 막아버림. 예 :a태그와 같이 클릭하면 이동시키는 그부분을 이동시키지못하게함 클릭- 이동 기능을 막음
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                // firefox 오류 잡기
                // if(window.opera){
                    //     delta = -delta;
                    // }
                    
                } 
                console.log("this==>"+index);
                var moveTop = $(window).scrollTop(); //스크롤탑넣기 
                // var allBoxSelecter = $(allBox).eq(index);//지금보는 것을 찍을수있음
                // console.log("thisidx ="+allBoxSelecter);
                console.log(event.wheelDelta);
                console.log("delta==>"+delta);


            //휠델타값이 -120으로 나오기때문에 아래로 내렸을때 아래의 연산이 가능

            //예 : 그래프상 기준인0 아래는 마이너스. 스크롤탑이아닌 delta
            if (delta < 0) {
                //work페이지에서만 기본스크롤 사용 
                if( index ==2 ){    
                    var nextIdx = index+1; //
                    var obj =  $target.eq(nextIdx);
                    // offsetTop; 은 스크립트 문법 혼동하지 말것.
                    var footertop = obj.offset().top;
                    // console.log("top=>"+footertop);
                    
                    moveTop = $(window).scrollTop()+300;
                    if( moveTop > footertop-500){
                        moveTop = arrallBoxTop[index+1];
                        
                    }
                }
                // (기본)마우스횔 위에서아래로
                else{
                    if (  arrallBoxTop[index+1] > 0 ) {
                        moveTop = arrallBoxTop[index+1];
                    }
                }
                // if (  arrallBoxTop[index+1] > 0 ) {
                //     moveTop = arrallBoxTop[index+1];
                // }

             // 마우스휠 아래에서위로
            } else{
                
                if( index ==2 ){    
                    console.log(moveTop);
                    var beforeindex = index-1; //
                    var objtow =  $target.eq(beforeindex);
                    var abouttop = objtow.offset().top;
                    // console.log("top=>"+footertop);
                    
                    moveTop = $(window).scrollTop()+300;
                    if( moveTop > abouttop+500){
                        moveTop = arrallBoxTop[index-1];
                        
                    }
                }
                else{
                    if (  arrallBoxTop[index-1] >= 0 ) {
                        moveTop = arrallBoxTop[index-1];
                    }
                }
            }

            
            
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({
                scrollTop: moveTop + 'px'
            }, {
                duration: 800, complete: function () {
                    console.log('완료');
                }
            });
        });
    });
   

















    // 사이드메뉴 색변경 
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





    /* 1.webprograming 2. editing 3. inforgraphic 리스트클릭 =>해당작품 보여주기 */

    const workList = document.querySelectorAll('.workMenu li');
    var work = document.querySelectorAll('#work article');
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





    //Editing 모달팝업
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
    
    

    



});