$(function(){
    $('ul li a').on('click', function(){
        $(this).parent().addClass('current').siblings().removeClass('current');
    });
});


$(function(){
    $(".menu-link").click(function(){
        $("#menu").toggleClass("active");
        $(".container").toggleClass("active");
    });
});
/**
 * Created by zsuzsa on 09-Mar-16.
 */
