document.addEventListener('DOMContentLoaded', () => {

    let params = new URLSearchParams(document.location.search);
    const id = parseInt(params.get('id'));
    const animal = `http://localhost:4000/api/v1/animals/${id}`
    const sections = 'http://localhost:4000/api/v1/adoptsections'

    fetch(`${animal}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {

        let rawdata = data.createdAt
        let rawmonth = rawdata.substr(5,7)
        let rawtime = rawdata.substr(0,10)
        let thatyear = parseInt(rawtime.substr(0,4))
        let thatmonth = parseInt(rawmonth.substr(0,2))
        let thatday = parseInt(rawtime.substr(8,10))
        let d = new Date();
        let thisday = d.getUTCDate()
        let thismonth = d.getUTCMonth()
        let thisyear = d.getUTCFullYear()
        let year = thisyear - thatyear
        let month = thismonth - thatmonth
        let day = thatday - thisday

        let arrived =year + ' år '+ month + ' måneder og ' + day +' dage siden'

        document.querySelector(".singleview__image").src = data.asset.url
        document.querySelector(".singleview__name").innerText = data.name
        document.querySelector(".singleview__text").innerText = data.description
        document.querySelector(".singleview__age").innerText = data.age + ' år gammel'
        document.querySelector(".singleview__arrived").innerText ='Ankom for ' + arrived

    })

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
        })
    })
})