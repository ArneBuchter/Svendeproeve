document.addEventListener('DOMContentLoaded', () => {
    let sections = 'http://localhost:4000/api/v1/adoptsections'
    fetch(`${sections}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.forEach(element => {
            if(element.asset.id === 11){
                document.querySelector('.header').style.backgroundImage = `url('${element.asset.url}')`
                document.querySelector('.header__title').innerText = element.title
                document.querySelector('.header__text').innerText = element.content
                console.log(element)
            }
        });
    })



})
