// $(document).ready(function(){ 
//     $(' .faq-img').first().addClass('active');
//     $('.title').first().next().slideDown();
//     $('.accordian-section').on('click','.title',function(){
//         $('.title').not(this).removeClass('active').next().slideUp();
//         $(this).toggleClass('active', !$(this).hasClass('active')).next().slideToggle();
//         var index =$(this).parent().index();
//         $('.faq-img').removeClass('active').eq(index).addClass('active');    
//     })
// })


$(document).ready(function () {
    $('.faq-img').first().addClass('active');
    $('.title').first().next().slideDown();
    $('.title').on('click', function () {
        var index = $(this).parent().index();
        $(".title").removeClass("active").next().slideUp();
        $(this).addClass("active").next().slideToggle();
        $('.faq-img').removeClass('active').eq(index).addClass('active');
    });


    // $('.testimonial-section').first().addClass('active');
    // $('.tab-link').first().addClass('active');
    // $('.tab-link').on('click', function () {
    //     var index = $(this).index();
    //     $(".tab-link").removeClass("active");
    //     $(this).addClass("active");
    //     $('.testimonial-section').removeClass('active').eq(index).addClass('active');
    // });
})
