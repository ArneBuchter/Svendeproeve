document.addEventListener('DOMContentLoaded', () => {
    const sections = 'http://localhost:4000/api/v1/adoptsections'
    const abouts = 'http://localhost:4000/api/v1/abouts'
    const volunteers = 'http://localhost:4000/api/v1/volunteers'
    const animals = 'http://localhost:4000/api/v1/animals'

    fetch(`${sections}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            if(element.id === 1){
                document.querySelector('.header').style.backgroundImage = `url('${element.asset.url}')`
                document.querySelector('.header__title').innerText = element.title
                document.querySelector('.header__text').innerText = element.content
            }
            if(element.id === 2){
                document.querySelector('.dyrinod').style.backgroundImage = `url('${element.asset.url}')`
                document.querySelector('.dyrinod__heading').innerText = element.title
                document.querySelector('.dyrinod__text').innerText = element.content
            }
            if(element.id === 3){
                document.querySelector('.adopterdyr').style.backgroundImage = `url('${element.asset.url}')`
                document.querySelector('.adopterdyr__heading').innerText = element.title
                document.querySelector('.adopterdyr__text').innerText = element.content
            }
        });
    })

    fetch(`${abouts}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        let template = document.querySelector('.about__template');
        let list = document.querySelector('.about');
        data.forEach(element => {
            let clone = template.content.cloneNode(true);
            clone.querySelector('.about__heading').innerText = element.title
            clone.querySelector('.about__text').innerText = element.content
            list.appendChild(clone)
        });
    })


    fetch(`${volunteers}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        let template = document.querySelector('.volunteers__template');
        let list = document.querySelector('.volunteers__content'); 
        data.forEach(element => {
            let clone = template.content.cloneNode(true);
            clone.querySelector('.volunteers__heading').innerText = element.title
            clone.querySelector('.volunteers__image').src = element.asset.url
            clone.querySelector('.volunteers__text').innerText = element.content
            if(element.content != undefined){
                clone.querySelector('.volunteers__footertext').innerText = element.extra
            }
            list.appendChild(clone)
        });
    })
    fetch(`${animals}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let template = document.querySelector('.adobterdyr__template');
        let list = document.querySelector('.adopterdyr__cardcontent');
        data.forEach(element => {
            let clone = template.content.cloneNode(true);
            clone.querySelector('.adopterdyr__image').src = element.asset.url
            clone.querySelector('.adopterdyr__cardheading').innerText = element.name
            clone.querySelector('.adopterdyr__cardtext').innerText = element.description
            list.appendChild(clone) 
        });

        let swiperTemplate = document.querySelector('.carusel__template');
        let imglist = document.querySelector('.main-carousel');

        data.forEach(function (element) {

            let imgclone = swiperTemplate.content.cloneNode(true);
            imgclone.querySelector('.swiper__img').src = `${element.asset.url}`;
            imgclone.querySelector('.swiper__text').innerText = element.name
            imglist.appendChild(imgclone);               
        })

        var elem = document.querySelector('.main-carousel');
        var flkty = new Flickity( elem, {
            cellAlign: 'center',
            contain: true,
            wrapAround:true,
            pageDots: true,
            autoPlay: true
        });
        
    })

})
