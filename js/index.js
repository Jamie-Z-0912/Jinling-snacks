var mySwiper;
$(function() {
    //loadingPage(); //图片预加载
    var w = $(window).width(),
        h = $(window).height(),i;
    if(w<h) $('body, .w , .swiper-container ,.swiper-slide,#success').css({'width': w,'height': h});
    else $('body, .w , .swiper-container ,.swiper-slide').css({'width':9/16*h,'height':h});
    $(".head").addClass("headDown"),$(".wan").addClass("wanUp"),$(".jinling").addClass("jinlingOut");
    mySwiper = $('.swiper-container').swiper({
        mode: 'vertical',
        speed: 750,
        resistance:false,
        loop: false, //是否循环
        onSlidePrev : function(){
            var pid = mySwiper.activeIndex;
            pageAnimate(pid);
        },
        onSlideNext : function(){
            var pid = mySwiper.activeIndex;
            pageAnimate(pid);
        },
        /*onTouchEnd: function(e) {
            console.log(e);
            e.parem.paginationElement.text();
        }*/
    });
    $(".up").bind('touchstart', function() {
        mySwiper.swipeNext();
        return false;
    });
    $(".zanActive").bind('touchstart', function() {
        var num=$(this).parent().find("span").text();
        $(this).parent().find("span").text(parseInt(num)+1);
    });
    $('.quan').bind('touchstart', function() {
        if($(".zhang").hasClass("zhangD")){
            alert("抱歉，您已经领取过了！");
        }else{
            $("#success").show();
            $(".zhang,.copy").addClass("zhangD");
            setTimeout(function(){$(".s-back").show()},2000);
        }
        return false;
    });
    $(".s-back").bind('touchstart', function() {
        $("#success").hide();
    });
    function pageAnimate(pageId){
        //alert(pageId);
        if($(".course-txt").hasClass("txtShow")){
            $(".course-name-left").removeClass("nameLeftIn"),$(".course-name-right").removeClass("nameRightIn");
            $(".course-tu-right").removeClass("imgRightIn"),$(".course-tu-left").removeClass("imgLeftIn");
            $(".course-txt").removeClass("txtShow");
        }
        if(pageId==0){
            $(".head").addClass("headDown"),$(".wan").addClass("wanUp"),$(".jinling").addClass("jinlingOut");
        }else if(pageId==4){
            $(".list-title").addClass("courseList").css({"-webkit-animation-duration":"1.5s","animation-duration":"1.5s"});
            $(".course-list").addClass("courseList").css({"-webkit-animation-duration":"2.5s","animation-duration":"2.5s"});
            setTimeout(function(){$(".quan").show().addClass("wanUp")},1000);
        }else{
            var _this=$("#p"+pageId),imgL,imgR,nameL,nameR;
            imgL=_this.find(".course-tu-left"),imgR=_this.find(".course-tu-right");
            nameL=_this.find(".course-name-left"),nameR= _this.find(".course-name-right");

            _this.find(".course-txt-1").addClass("txtShow");
            setTimeout(function(){_this.find(".course-txt-2").addClass("txtShow");},2600); 
            switch (pageId){
                case 1:
                    $(".head").removeClass("headDown"),$(".wan").removeClass("wanUp"),$(".jinling").removeClass("jinlingOut");
                    imgL.addClass("imgLeftIn"),nameR.addClass("nameRightIn");
                    setTimeout(function(){nameL.addClass("nameLeftIn"),imgR.addClass("imgRightIn")},2600);         
                break;
                case 2:
                    nameL.addClass("nameLeftIn"),imgR.addClass("imgRightIn");
                    setTimeout(function(){nameR.addClass("nameRightIn"),imgL.addClass("imgLeftIn")},2600);              
                break;
                case 3:
                    imgL.addClass("imgLeftIn"),nameR.addClass("nameRightIn");
                    setTimeout(function(){nameL.addClass("nameLeftIn"),imgR.addClass("imgRightIn")},2600);   
                    if($(".list-title").hasClass("courseList")){
                        $(".list-title,.course-list").removeClass("courseList");
                        $(".quan").removeClass("wanUp").hide();
                    }                   
                break;
            }
        }
    }   
});