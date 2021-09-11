
$('a').on('click', function(e){
    e.preventDefault();
    
});

const swiper = new Swiper('.slider', {

    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    speed: 700,
    allowTouchMove:false,

    mousewheel: {
        invert: true,
    },

});

const workSlider = new Swiper('.works__slider', {

    slidesPerView: 3,
    loop: true,
    centeredSlides: true,

    navigation: {
        nextEl: '.intro__arrow-next',
        prevEl: '.intro__arrow-prev',
    },

});


$('.header__btn').on('click', function(){
    $('.slider').addClass('transform');
    $('.nav').addClass('active');
    $('.header').addClass('opacity');

    let Navid = $('.swiper-slide-active').data('nav');
    $(Navid).addClass('active');
});

$('.nav a').on('click', function(e){
    e.preventDefault();
    $('.nav a').removeClass('active');
    $(this).addClass('active');

    let index = $(this).data('index');


    swiper.slideTo(index, 700)

    setTimeout(function(){
        $('.slider').removeClass('transform');
        $('.nav').removeClass('active');
        $('.header').removeClass('opacity');
    }, 800);
});


swiper.on('scroll', function(){
    $('.slider__pagination p').addClass('active');
});

$('.slider__pagination p').on('click', function(){
    $('.slider__pagination p').removeClass('active');
    $(this).addClass('active');

    let index = $(this).data('index');
    swiper.slideTo(index, 700);
    
});