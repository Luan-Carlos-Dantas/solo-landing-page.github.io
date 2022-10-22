window.addEventListener('scroll', onScroll)
window.addEventListener('scroll', ()=>{
    if(scrollY > 100){
        document.querySelector('.arrow-up').classList.add('show')
    }else{
        document.querySelector('.arrow-up').classList.remove('show')
    }
})

onScroll()
function onScroll(){
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(why_us)
    activateMenuAtCurrentSection(about_us)
    activateMenuAtCurrentSection(our_benefits)
    activateMenuAtCurrentSection(products)
    activateMenuAtCurrentSection(testimonials)
    activateMenuAtCurrentSection(newsletter)
}

function activateMenuAtCurrentSection(section){
    const targetLine = scrollY + (innerHeight / 2)

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionEndAt = sectionTop + sectionHeight

    const sectionTopReachOrPassedTargetLine =  targetLine >= sectionTop
    const sectionEndOrPassedTargetLine =  sectionEndAt <= targetLine  

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndOrPassedTargetLine

    const currentSection = section.getAttribute('id')


    const menuElement = document.querySelector(`.menu a[href*=${currentSection}]`)

    menuElement.classList.remove('actived')

    if(sectionBoundaries){
        menuElement.classList.add('actived')
    }
}

// Animation Menu Hamburguer
window.addEventListener('onload', ()=>{
    if(body.classList.contains('show-menu')){
        body.classList.remove('show-menu')
    }
})

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};
var hamburgers = document.querySelectorAll(".hamburger");
var body = document.querySelector('body')
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
}

var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
    if(!body.classList.contains('show-menu')){
        body.classList.add('show-menu')
    }else{
        body.classList.remove('show-menu')
    }
})

function closeMenu(){
    if(body.classList.contains('show-menu')){
        body.classList.remove('show-menu')
        hamburger.classList.toggle("is-active");
    };
}


// Testimonials slide
const swiper = new Swiper('.swiper',{
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
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
AOS.init();
