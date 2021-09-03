//Damos paso a la funcion para que funcione el carousel

$(document).on("ready", function(){
    $(".slider").slick({
        Infinity: true,
        autoplay: true,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>"',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></span>"'
    })
})