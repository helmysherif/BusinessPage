// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 50) {
//             $(".bottom-header").css("background" , "black");
//             $(".dropdown-toggle").css("color" , "white");
//             $(".nav-item.active2").css("color" , "aqua");
//             $(".pro").css("color" , "white");
//         }
//         else{
//             $(".bottom-header").css("background" , "white");
//             $(".dropdown-toggle").css("color" , "black");
//             $(".nav-item.active2").css("color" , "aqua");
//             $(".pro").css("color" , "black");
//         }
//     })
// })

$(document).ready(function(){
    $('.box3').hover(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    });
    $('.box8').hover(function(){
        $('.text3').show();
        $('.text4').hide();
        $('.text5').hide();
        $('.text6').hide();
        $('.text7').hide();
    });
    $('.box4').hover(function(){
        $('.text4').show();
        $('.text3').hide();
        $('.text5').hide();
        $('.text6').hide();
        $('.text7').hide();
    });
    $('.box5').hover(function(){
        $('.text5').show();
        $('.text4').hide();
        $('.text3').hide();
        $('.text6').hide();
        $('.text7').hide();
    });
    $('.box6').hover(function(){
        $('.text6').show();
        $('.text5').hide();
        $('.text4').hide();
        $('.text3').hide();
        $('.text7').hide();
    });
    $('.box7').hover(function(){
        $('.text7').show();
        $('.text6').hide();
        $('.text5').hide();
        $('.text4').hide();
        $('.text3').hide();
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
})