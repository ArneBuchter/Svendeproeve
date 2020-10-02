 document.addEventListener('DOMContentLoaded', () => {
    const spinner = document.querySelector('.spinner')

    let typedUsername;
    let typedPassword;

    document.querySelector('#submit').addEventListener('click', (e) => {
      spinner.style.opacity = '1'
      e.preventDefault()
      if(valider(document.querySelector('#login'))){
          let token;
          fetch("http://localhost:4000/auth/token", {
            "method": "POST",
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": `username=${typedUsername}&password=${typedPassword}`
          })
          .then(response => response.json())
          .then(data => {

              if(data.token){
                
                token = data.token
                let key = 'token' 
                sessionStorage.setItem(key, token)

                window.location.href = `/adminpanel/index.html`
                
              }else{
                document.querySelector('.form__udfyld').innerHTML = 'Brugernavn eller password er ikke korrekt'
                spinner.style.opacity = '0'
              }
          })

          .catch(err => console.error(err));

            
      }else{
        document.querySelector('.form__udfyld').innerHTML = 'Brugernavn eller password er ikke korrekt'
        spinner.style.opacity = '0'
      }
      function valider(form) {

        if(form.username.value){
          typedUsername = form.username.value
          typedPassword = form.password.value
            return true
        }else{
          return false 
          console.error('fejl');
        }
      }
    })
})