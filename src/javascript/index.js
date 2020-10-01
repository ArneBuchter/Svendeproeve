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
            console.log(element)
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

    
    document.querySelector('#submit').addEventListener('click', (e) => {
        e.preventDefault()
        if(valider(document.querySelector('#form'))){
            const body = new FormData
            body.append("name", `${form.name.value}`)
            body.append("", "\\")
            body.append("email", `${form.email.value}`)
            
            fetch("http://localhost:4000/api/v1/subscribers", {
              body,
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              method: "POST"
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.href = `/tilmeldafmeld/index.html?name=${form.name.value}`
            })
            console.log('virker')
        }else{
            document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
        }
    })

    function valider(form){
            
        if(form.name.value.length == 0){
            form.name.focus();
            redo('#name')

        }else{
            ok('#name')
        };


        function validateEmail(email) {
            let re = /(.+)@(.+){2,}\.(.+){2,}$/;
            return re.test(String(email).toLowerCase());
        }         

        if(
        form.email.value.length == 0){
            form.email.focus();
            document.querySelector('#email').style.backgroundColor = '#ffaaaa';
            return false;
        }else if(validateEmail(form.email.value)){
            document.querySelector('#email').style.backgroundColor = 'transparent';
        }else{
            form.email.focus();
            document.querySelector('#email').style.backgroundColor = '#ffaaaa';
            return false;
        };


        return true;
    }



    function redo(qs) {
                document.querySelector(qs).style.backgroundColor = '#ffaaaa';
                return false;
    }

    function ok(qs) {
        document.querySelector(qs).style.backgroundColor = 'transparent';
    }



    fetch(`${animals}`,{
        'method': 'GET'

    }) //fetch
    .then(response => response.json())
    .then(data => {
        let template = document.querySelector('.adobterdyr__template');
        let list = document.querySelector('.adopterdyr__cardcontent');
        document.querySelector('.adobterdyr__text').innerText = data.length + ' dyr'
        data.forEach(element => {
            let clone = template.content.cloneNode(true);
            clone.querySelector('.adopterdyr__card').href = `/singleview/index.html?id=${element.id}`
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
