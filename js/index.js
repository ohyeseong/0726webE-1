$(document).ready(function(){
    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown("fast");
    }, function(){
        $(".sub").stop().slideUp("fast");
    })

    var n = 0;

    setInterval(function(){
        if(n == 2){
            n = 0;
        }else{
            n ++;
        }

        $(".sl_img").animate({"left":n * (-100) + "%"}, 500)
        $(".slide_title").animate({"top":n * (-100) + "%"}, 500)
    }, 3000)
})