document.addEventListener('DOMContentLoaded', () => {

    const sections = 'http://localhost:4000/api/v1/adoptsections'
    const abouts = 'http://localhost:4000/api/v1/abouts'
    const volunteers = 'http://localhost:4000/api/v1/volunteers'
    const animals = 'http://localhost:4000/api/v1/animals'

    let vareId;
    let formName;
    let formPrice;
    let formImage;
    let formMessage;
    const token = sessionStorage.getItem("token");

    let addItem = document.querySelector('#addItem')


    document.querySelector('#sections__submit').addEventListener('click', (e) => {
        e.preventDefault()
        if(valider(document.querySelector('#sections'))){
            fetch('something')
            .then(function(response){
                return response.json();
            })
            .then((data) => {
                console.log(data)
                    vareId = data.varer.length+1
            })
            

            //post til api

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
            formName = form.name.value;
        };
    
        if(form.price.value.length < 1){
            form.price.focus();
            redo('#price')
        }else{
            ok('#price')
            formPrice = form.price.value;
        }      

        if(form.message.value.length == 0){
            form.message.focus();
            document.querySelector('#message').style.backgroundColor = '#ffaaaa';
            return false;
        }else{
            document.querySelector('#message').style.backgroundColor = 'transparent';
            formMessage = form.message.value
        };

        if(form.image.value != "*.jpg" && form.image.value != undefined){
            document.querySelector('.imageinfo').innerHTML = "Dit billede skal være en jpg fil, for ikke at begrænse lagerplads"
            return false;
        }

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