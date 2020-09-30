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
        console.log(data)
        let rawdata = data.createdAt
        let rawmonth = rawdata.substr(5,7)
        let rawtime = rawdata.substr(0,10)
        let year = rawtime.substr(0,4)
        let month = rawmonth.substr(0,2)
        let day = rawtime.substr(8,10)
        let arrived = rawtime
        console.log( month )

        document.querySelector(".singleview__image").src = data.asset.url
        document.querySelector(".singleview__name").innerText = data.name
        document.querySelector(".singleview__text").innerText = data.description
        document.querySelector(".singleview__age").innerText = data.age + ' years old'
        document.querySelector(".singleview__arrived").innerText = arrived

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