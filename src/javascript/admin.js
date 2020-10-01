 document.addEventListener('DOMContentLoaded', () => {

    let login = document.querySelector('#login')
    let typedUsername;
    let typedPassword;
    let getToken = 'http://localhost:4000/auth/token'

    document.querySelector('#submit').addEventListener('click', (e) => {
        e.preventDefault()
        if(valider(login)){
            //post til api for at få token

            const getToken = 'http://localhost:4000/auth/token'
            let token;
            
            fetch(getToken, {  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json'
                  //  'Content-Type': 'application/x-www-form-urlencoded'  
                },  
                 body: JSON.stringify({
                'username' : 'admin',
                'password' : '1234'
              })
            })
            .then(function (data) {  
              console.log('Request success: ', data);  
            })  
            .catch(function (error) {  
              console.log('Request failure: ', error);  
            });

 /*           async function postData(url = '', data = {}) {
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
              
              postData('https://example.com/answer', { username: typedUsername, password: typedPassword })
                .then(data => {
                  console.log(data); // JSON data parsed by `data.json()` call
                  if(data != err){
                    let token = data;
                    let key = "token"

                    sessionStorage.setItem(key, token)
                  }else{
                      document.querySelector('.form__udfyld').innerHTML += 'username or password is incorrect.'
                  }                 

                });


        }else{
            document.querySelector('.form__udfyld').innerHTML += 'username or password is missing.'
        }
    })


    function valider(form){

        if(form.username.value.length < 1 && form.password.value.length < 1){

            return true
        }
    }
}) */