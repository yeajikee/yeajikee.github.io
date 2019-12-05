
var burgerBtn = document.querySelector('.burger');//버거메뉴 Grap
var totalmenu = document.querySelector('.Total-menu');//Grapping total menu page
var totalclose = document.querySelector('.totalclose');//close btn
var totalnav = document.querySelector('.Total-menu .nav');


// <전체메뉴 보이기> click 이벤트발생 --> 1. 전체메뉴 투명도 100% 2. index위로 올려 나타내기
burgerBtn.addEventListener('click', function(){
    totalmenu.style.opacity = '1';
    totalnav.style.opacity = '1';

    //메뉴 위에 arrow가 보여서 300으로 지정
    totalmenu.style.zIndex = '300';
    totalnav.style.zIndex = '200';
});
// <전체메뉴 숨기기> click 이벤트발생 --> 1. 전체메뉴 투명도 0 2. index 아래로 내려 숨기기
totalclose.addEventListener('click', function () {
    totalmenu.style.opacity = '0';
    totalnav.style.opacity = '0';

    totalmenu.style.zIndex = '-200';
    totalnav.style.zIndex = '-200';
});




var objSlide = document.querySelector('.Slidewrap');
var obj =objSlide.children;
//슬라이드array 0
var a=0;  
//슬라이드버튼 
var slidebntli = this.document.getElementsByClassName('slidebtn');
// console.log(slidebntli);
var childrenli = slidebntli[0].children[0].children;
// console.log(childrenli);
// var childrenliArray = Array.from(childrenli);
    
    
    
    //슬라이드버튼적용 - 
    //숙제
    //클릭했을때 인덱스가져오고(슬라이드이미지) a를 인덱스로 바꿔주기. a= 버튼 리스트에 인덱스
    //슬라이드 버튼 누를때 그 인덱스 이미지보여주기 
    
// childrenli.addEventListener('click', function(){
//     alert('얖');
// });
    
    
setInterval(function(){
    // 초기화
    for( i=0; i<obj.length; i++){
        obj[i].style.opacity = '0';
        obj[i].style.zIndex ='0';
        
        childrenli[i].classList.remove('on'); //슬라이드버튼초기화
        
    }
    // console.log(obj[a]); //아래a++보여주기
    obj[a].style.opacity = '1';
    obj[a].style.zIndex ='1';
    childrenli[a].classList.add('on'); // 슬라이드버튼 색 넣기
    
    a++;
    //슬라이드사진 증가
    if(a >2){
        a =0 ;
    }
    
},4000);
    
    

//애니메이션
//마우스오버하면 아래서올라오기 
var itemtextall = document.querySelectorAll('.itemtextall');
var itemtextallChildren = itemtextall.children;
// var itemtextallSpan = itemtextallChildren[2];

//마우스오버할것을 가져오기
var ClassWrap = document.getElementsByClassName('wrap');
var itemtextallWrap = this.Array.from(ClassWrap);

// console.log(itemtextallWrap);

for( let i=0; i< itemtextallWrap.length; i++){
    // console.log(itemtextallWrap[i]);
    
    // var Overitem = itemtextallWrap[i];
    // Overitem.addEventListener('mouseover',mymouseover);
    
    itemtextallWrap[i].addEventListener('mouseover',mymouseover);
    function mymouseover(){
        
        itemtextall[i].children[2].style.bottom = '50px';
        // alert(i);
    }    
    itemtextallWrap[i].addEventListener('mouseout',mymouseout);
    function mymouseout(){
        
        itemtextall[i].children[2].style.bottom = '-50px';
        // alert(i);
    }    
};    


$(document).ready(function(){
    var subul = $('.subul');
    // console.log(subul);
    var mainmenuList = $('.mainmenu>li');
    // console.log(mainmenuList);
    var subbg = $('#submenu');
    // console.log(subbg);

    var navbg = $('nav');
    // console.log(navbg);


    mainmenuList.on('mouseover', function(){
        var MelistIdx = $(this).index(); //메뉴의 인덱스값가져옴
        // console.log(MelistIdx);
        for(var i=0; i<subul.length; i++){
            if(MelistIdx === i){
                // console.log(MelistIdx,i);
                subul[i].style.display = 'block';
            }
            else if(MelistIdx === 1){
                subbg[0].style.height='260px'; 
                subul[0].style.display = 'none';
                subul[2].style.display = 'none';
            }
             
            /*두번째 (인덱스 1)일때 subbg 백그라운드 height =260px 설정하는 과정에서의 오류
            1. 인덱스 1 주변 0과 2의 else문이 적용되지않음. 1번(제품소개)를 선택하는경우 양쪽 0과2가 block에서 그대로 유지됨.
            2. 해결방법 : subul[0].style.display = 'none'; subul[2].style.display = 'none'; 
            */

            else{
                subul[i].style.display = 'none';
                subbg[0].style.height='80px';
            }
        }
    });

    navbg.on('mouseover', function(){
        subbg[0].style.display = 'block';
    });
    navbg.on('mouseout', function(){
        subbg[0].style.display = 'none';
    });
});

    

        


        


