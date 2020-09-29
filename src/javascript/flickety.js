
let swiperTemplate = document.querySelector('.carusel__template');
let list = document.querySelector('.main-carousel');

array.forEach(function (element) {

    let clone = swiperTemplate.content.cloneNode(true);
    clone.querySelector('.swiper__img').src = `${element.image}`;
    list.appendChild(clone);

    
    })


    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
    cellAlign: 'center',
    contain: true,
    wrapAround:true,
    pageDots: true,
    autoPlay: true
    });

