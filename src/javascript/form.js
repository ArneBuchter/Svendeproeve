
document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
    if(valider(document.querySelector('#form'))){
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
    };

    if(form.address.value.length == 0){
        form.address.focus();
        redo('#address')

    }else{
        ok('#address')
    }

    if(form.zip.value == ""){
        redo('#zip')

    }else{
            let postnr = form.zip.value

            fetch(`https://dawa.aws.dk/postnumre?nr=${postnr}`, {
            method: "GET",

            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        .then(data => { 
            if(data[0].navn == undefined){
                redo('#zip')
            }else{
                form.city.value = data[0].navn
                ok('#zip')
                ok('#city')    }
        })
    }

    if(form.city.value == ""){
        redo('#city')
    }else{
            let by = form.city.value.charAt(0).toUpperCase() + form.city.value.slice(1);

            fetch(`https://dawa.aws.dk/postnumre?navn=${by}`, {
            method: "GET",

            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.json())
        .then(data => { 
            if(!data[0].nr == true){
                redo('#city')
            }else{
                form.zip.value = data[0].nr
                ok('#zip')
                ok('#city')    }
        })
    }

    if(form.phone.value.length < 8){
        form.phone.focus();
        redo('#phone')
    }else{
        ok('#phone')
    }

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
      if(
        form.message.value.length == 0 
        ){
        form.message.focus();
        document.querySelector('#message').style.backgroundColor = '#ffaaaa';
        return false;
    }else{
        document.querySelector('#message').style.backgroundColor = 'transparent';
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