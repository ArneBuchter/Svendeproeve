document.addEventListener('DOMContentLoaded', () => {
    let params = new URLSearchParams(document.location.search);
    const name = params.get('name');
    const sections = 'http://localhost:4000/api/v1/adoptsections'

    document.querySelector('#navn').innerText = name;


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

    document.querySelector('#submit').addEventListener('click', (e) => {
        e.preventDefault()
        if(valider(document.querySelector('#form'))){
            fetch(`http://localhost:4000/api/v1/subscribers/${form.name.value}`, {

                headers: {
                "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "DELETE"
            })
            .then(data => {
                console.log(data)
                if(data.status === 200){
                    document.querySelector('.tilmeldafmeld__response').innerText = 'Du er nu blevet afmeldt'
                }else{
                    document.querySelector('.tilmeldafmeld__response').innerText = 'Hovsa, der skete en fejl.'
                }
            })
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
})