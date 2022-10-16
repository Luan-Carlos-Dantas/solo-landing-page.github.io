const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    autoplay:{
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        dynamicBullets: true
    },
    efect: 'coverflow',
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        992:{
            slidesPerView:2,
            setWrapperSize:true
        }
    },
});

swiper.slideNext();
