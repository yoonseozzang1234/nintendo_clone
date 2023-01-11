$(document).ready(function(){
  /////// 슬라이더
  $('.main_visual').bxSlider({
    pagerType:'short',
    auto:'true',
    pause:'2500',
    autoHover:'true'
  });
    /////// 메뉴바

    $(".main1").on("mouseenter click" ,function(){
		$(".sub1").stop().slideDown(350);
	});
    $(".main1").mouseleave(function(){
		$(".sub1").stop().slideUp(350);
	});

    $(".main2").on("mouseenter click" ,function(){
		$(".sub2").stop().slideDown(350);
	});
    $(".main2").mouseleave(function(){
		$(".sub2").stop().slideUp(350);
	});

    $(".main3").on("mouseenter click" ,function(){
		$(".sub3").stop().slideDown(350);
	});
    $(".main3").mouseleave(function(){
		$(".sub3").stop().slideUp(350);
	});

    $(".main4").on("mouseenter click" ,function(){
		$(".sub4").stop().slideDown(350);
	});
    $(".main4").mouseleave(function(){
		$(".sub4").stop().slideUp(350);
	});

    $(".main5").on("mouseenter click" ,function(){
		$(".sub5").stop().slideDown(350);
	});
    $(".main5").mouseleave(function(){
		$(".sub5").stop().slideUp(350);
	});
    /////// 메뉴바 end

    /////// 서치 버튼
    $("#header_search").click(function(){
      if( $("#search_box").css("display") == "none"  ){
          $("#search_box").stop().slideDown();
      }
    });
    $("#close_btn").click(function(){
    $("#search_box").stop().slideUp();
    });
    /////// 서치 버튼 end


    
});