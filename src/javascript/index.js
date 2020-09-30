document.addEventListener('DOMContentLoaded', () => {
    let sections = 'http://localhost:4000/api/v1/adoptsections'
    let abouts = 'http://localhost:4000/api/v1/abouts'
    let volunteers = 'http://localhost:4000/api/v1/volunteers'
    fetch(`${sections}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element)
            if(element.asset.id === 11){
                document.querySelector('.header').style.backgroundImage = `url('${element.asset.url}')`
                document.querySelector('.header__title').innerText = element.title
                document.querySelector('.header__text').innerText = element.content
            }
            if(element.asset.id === 12){
                document.querySelector('.dyrinod').style.backgroundImage = `url('${element.asset.url}')`
                document.querySelector('.dyrinod__heading').innerText = element.title
                document.querySelector('.dyrinod__text').innerText = element.content
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
})
