let vareId;
let formName;
let formPrice;
let formImage;
let formMessage;


document.addEventListener('DOMContentLoaded', () => {
    let addItem = document.querySelector('#addItem')

    let token = localStorage.getItem("token");
    console.log(token)
    //let obj = JSON.parse(token);

    document.querySelector('#submit').addEventListener('click', (e) => {
        e.preventDefault()
        if(valider(addItem)){
            fetch('something')
            .then(function(response){
                return response.json();
            })
            .then((data) => {
                console.log(data)
                    vareId = data.varer.length+1
            })
            

            //post til api

            async function postData(url = '', data = {}) {
                // Default options are marked with *
                const response = await fetch(url, {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  mode: 'cors', // no-cors, *cors, same-origin
                  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                  credentials: 'same-origin', // include, *same-origin, omit
                  headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  redirect: 'follow', // manual, *follow, error
                  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                  body: JSON.stringify(data) // body data type must match "Content-Type" header
                });
                return response.json(); // parses JSON response into native JavaScript objects
              }
              
              postData('https://example.com/answer', { id: vareId, varenavn: name, varepris: price, vareimg: image, neeskrivelse: message })
                .then(data => {
                  console.log(data); // JSON data parsed by `data.json()` call

                });
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