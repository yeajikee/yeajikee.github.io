$(document).ready(function(){
    $('.Left_hamburger').on('click',function(){
        $('.menupop').stop().animate({'left':'-15px'},500);

    });
    $('.pretty').on('click',function(){
        $('.menupop').stop().animate({'left':'-200px'},500);
    });
// ---------------------------------------------------------------------------------------------------------
    var $contents = $('article .textparent'); //mouseover 발생시킬 div저장 
    $contents.on('mouseover',function(){

        var $target = $(this); //contents this  입니다.
        // console.log( $(this).children('.text-wrap'));
        
        $target.children('.text-wrap').stop().show();
       
    });
    $contents.on('mouseout',function(){

        var $target = $(this); //contents this  입니다.
        // console.log( $(this).children('.text-wrap'));
        
        $target.children('.text-wrap').stop().hide();
       
    });
});
   

