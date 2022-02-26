// 내비메뉴
$('.nav-level1>li').mouseenter(function(){
    $(this).children('.nav-level2').slideDown(300);
})
$('.nav-level2,.nav-level1>li').stop().mouseleave(function(){
    $('.nav-level2').slideUp(300);
})



// 슬라이더
setInterval(mySlider,3000);
let cnt = 1;
function mySlider(){
    if(cnt>=3){
        cnt=1;
        $('.slide').animate({
            left:'+=2400px',
        });
    }else{
        cnt++;
        $('.slide').animate({
            left:'-=1200px',
        });
    }
}


// 공지사항/갤러리 이동
$('.sub-tit').on('click',function(){
    $('.art').removeClass('on');
    $(this).parent('.art').addClass('on');
})



// 스킵메뉴
$('.skip-nav a').on({
    focusin:function(){
        $('.skip-nav').css('top','0');
    },
    focusout:function(){
        $('.skip-nav').css('top','-9999px');
    }
})



// 공지사항 모달
// 열기
$('.notice-modal1').on({
    click:function(e){
        $('.notice-popup01').show(0);
        e.preventDefault();
    }
})
$('.notice-modal2').on({
    click:function(e){
        $('.notice-popup02').show(0);
        e.preventDefault();
    }
})
$('.notice-modal3').on({
    click:function(e){
        $('.notice-popup03').show(0);
        e.preventDefault();
    }
})
$('.notice-modal4').on({
    click:function(e){
        $('.notice-popup04').show(0);
        e.preventDefault();
    }
})
$('.notice-modal5').on({
    click:function(e){
        $('.notice-popup05').show(0);
        e.preventDefault();
    }
})


$('.gallery-modal1').on({
    click:function(e){
        $('.gallery-popup01').show(0);
        e.preventDefault();
    }
})
$('.gallery-modal2').on({
    click:function(e){
        $('.gallery-popup02').show(0);
        e.preventDefault();
    }
})
$('.gallery-modal3').on({
    click:function(e){
        $('.gallery-popup03').show(0);
        e.preventDefault();
    }
})
// 닫기
$('.modal-btn button').on({
    click:function(){
        $('.modal-popup').hide(0);
    }
})