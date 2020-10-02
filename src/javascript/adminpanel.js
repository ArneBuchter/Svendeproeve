document.addEventListener('DOMContentLoaded', () => {

    const sections = 'http://localhost:4000/api/v1/adoptsections'
    const abouts = 'http://localhost:4000/api/v1/abouts'
    const volunteers = 'http://localhost:4000/api/v1/volunteers'
    const animals = 'http://localhost:4000/api/v1/animals'

    const token = sessionStorage.getItem("token");

    
    fetch(`${sections}`,{
        'method': 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const template = document.querySelector('.sections__template')
        const list = document.querySelector('.sections__ul')
        data.forEach(element => {
            let clone = template.content.cloneNode(true)
            clone.querySelector('.sections__link').innerText = element.title
            clone.querySelector('.sections__link').setAttribute('data-id', `${element.id}`) 
            list.appendChild(clone)
        });
            document.querySelector('.sections__ul').addEventListener('click', (e) => {
                let myId = e.target.getAttribute('data-id')
                data.forEach(element => {                   
                    if(element.id == myId){
                        document.querySelector('.sections__overskrift').value = element.title
                        document.querySelector('.sections__tekst').value = element.content
                        document.querySelector('.sections__form').style.display = 'block'
                        document.querySelector('.sections__infoId').innerText = element.id
                        document.querySelector('.sections__infoAssetId').innerText = element.assetId
                    }
                });
            })    
         
    })

            
            document.querySelector('#sections__submit').addEventListener('click', (e) => {
                e.preventDefault()
                if(validerName(document.querySelector('#sections')) && validerText(document.querySelector('#sections'))){
                    let sectionsId = document.querySelector('.sections__infoId').innerText
                    let sectionsAssetId = document.querySelector('.sections__infoAssetId').innerText
                    fetch(`http://localhost:4000/api/v1/adoptsections/${sectionsId}`, {
                        "method": "PUT",
                        "headers": {
                          "Content-Type": "application/x-www-form-urlencoded",
                          "Authorization": `Bearer ${token}`
                        },
                        "body": `title=${formName}&content=${formText}&assetId=${sectionsAssetId}`
                      })
                      .then(response => console.log(response))
                      .catch(err => console.error(err));
                }else{
                    document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
                } 
            })
        
    



            fetch(`${abouts}`,{
                'method': 'GET'
    
            }) //fetch
            .then(response => response.json())
            .then(data => {
                const template = document.querySelector('.abouts__template')
                const list = document.querySelector('.abouts__ul')
                data.forEach(element => {
                    let clone = template.content.cloneNode(true)
                    clone.querySelector('.abouts__link').innerText = element.title
                    clone.querySelector('.abouts__link').setAttribute('data-id', `${element.id}`)
                    list.appendChild(clone)
                    document.querySelector('.abouts__ul').addEventListener('click', (e) => {
                        let myId = e.target.getAttribute('data-id')
                        data.forEach(element => {
                            
                            if(element.id == myId){
                                document.querySelector('.abouts__overskrift').value = element.title
                                document.querySelector('.abouts__message').value = element.content
                                document.querySelector('.abouts__infoId').innerText = element.id
                                document.querySelector('.abouts__form').style.display = 'block'
                            }
                        });
                    })
                });
            })
            document.querySelector('#abouts__submit').addEventListener('click', (e) => {
                e.preventDefault()
        
                if(validerName(document.querySelector('#abouts')) && validerMessage(document.querySelector('#abouts'))){
                    let aboutsId = document.querySelector('.abouts__infoId').innerText
                    fetch(`http://localhost:4000/api/v1/abouts/${aboutsId}`, {
                        "method": "PUT",
                        "headers": {
                          "Content-Type": "application/x-www-form-urlencoded",
                          "Authorization": `Bearer ${token}`
                        },
                        "body": `title=${formName}&content=${formMessage}`
                      })
                      .then(response => console.log(response))
                      .catch(err => console.error(err));
                }else{
                    document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
                } 
            })
    

            fetch(`${volunteers}`,{
                'method': 'GET'

            }) //fetch
            .then(response => response.json())
            .then(data => {
                let template = document.querySelector('.volunteers__template')
                let list = document.querySelector('.volunteers__ul')
                data.forEach(element => {
                    let clone = template.content.cloneNode(true)
                    clone.querySelector('.volunteers__link').innerText = element.title
                    clone.querySelector('.volunteers__link').setAttribute('data-id', `${element.id}`)
                    list.appendChild(clone)
                    document.querySelector('.volunteers__ul').addEventListener('click', (e) => {
                        //console.log(e.target)
                        let myId = e.target.getAttribute('data-id')
                        //console.log(myId)
                        data.forEach(element => {
                           // console.log(element)
                            if(element.id == myId){
                                document.querySelector('.volunteers__overskrift').value = element.title
                                document.querySelector('.volunteers__message').value = element.content
                                document.querySelector('.volunteers__tekst').value = element.extra
                                document.querySelector('.volunteers__infoId').innerText = myId
                                document.querySelector('.volunteers__infoAssetId').innerText = element.assetId
                                document.querySelector('.volunteers__form').style.display = 'block'
                            }else if(e.target.getAttribute('data-id') == undefined){
                                document.querySelector('.volunteers__form').style.display = 'block'
                                document.querySelector('.volunteers__infoId').innerText = data.length+1
                                document.querySelector('.volunteers__infoAssetId').innerText = 'NY'
                                document.querySelector('#Volunteers__submit').innerText = 'Opret'
                            }
                        });
                    })
                });
            })
            document.querySelector('#Volunteers__submit').addEventListener('click', (e) => {
                e.preventDefault()
        
                if(validerName(document.querySelector('#volunteers'))){
                    if(validerMessage(document.querySelector('#volunteers')) && validerText(document.querySelector('#volunteers'))){
                        let volunteersAssetId = document.querySelector('.volunteers__infoAssetId').innerText
                        let volunteersId = document.querySelector('.volunteers__infoId').innerText
                        console.log(volunteersAssetId)
                        if(volunteersAssetId == 'NY'){
                            fetch("http://localhost:4000/api/v1/volunteers", {
                            "method": "POST",
                            "headers": {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkdXlKQjU5OHpqQ0VpQno2cUY0UDlLLlhrUGRESXd5ajJjd1FXU1lRczNIbHY1TUZsbUxJTlciLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoifSwiaWF0IjoxNTg5NzQzNDI4LCJleHAiOjE1ODk3NDcwMjh9.RQlQN6Aj8Ypvso2B81fPLfGZ9Vj9YelqHLT9KKGFxqE"
                            },
                            "body": `title=${formName}&content=${formMessage}&extra=${formText}&assetId=13`
                            })
                            .then(response => console.log(response))
                            .catch(err => console.error(err));
                        }else{
                            fetch(`http://localhost:4000/api/v1/volunteers/${volunteersId}`, {
                                "method": "PUT",
                                "headers": {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "Authorization": `Bearer ${token}`
                                },
                                "body": `title=${formName}&content=${formMessage}&extra=${formText}&assetId=${volunteersAssetId}`
                            })
                            .then(response => console.log(response))
                            .catch(err => console.error(err));
                        }
                    }
                }else{
                    document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
                }                
            })
    
    let dyr = [];
    document.querySelector('.animals__ul').addEventListener('click', (e) => {
        if(e.target.classList.contains('animals-one')){
            fetch(`${animals}`,{
                'method': 'GET'
            }) //fetch
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {
                    dyr.push({navn: element.name, id: element.id, tekst: element.description, asset: element.asset.url, alder: element.age, assetId: element.assetId})
                });
                let template = document.querySelector('.animals__template')
                let list = document.querySelector('.animals__linkul')
                dyr.forEach((pet, i) => {
                    let clone = template.content.cloneNode(true)
                    clone.querySelector('.animals__li').innerText = pet.navn
                    clone.querySelector('.animals__li').dataset.id = i+1
                    list.appendChild(clone)
                    document.querySelector('.animals__linkul').addEventListener('click', (e) => {
                        if(e.target.getAttribute('data-id') == pet.id){
                            document.querySelector('.animals__overskrift').value = pet.navn
                            document.querySelector('.animals__tekst').value = pet.tekst
                            document.querySelector('.animals__age').value = pet.alder
                            document.querySelector('.animals__infoId').innerText = pet.id
                            document.querySelector('.animals__infoAssetId').innerText = pet.assetId
                            document.querySelector('.animals__form').style.display = 'block'
                        }
                    });
                })              
            })
            document.querySelector('#animals__submit').addEventListener('click', (e) => {
                e.preventDefault()
        
                if(validerName(document.querySelector('#animals')) && validerMessage(document.querySelector('#animals'))){
                    let animalsAssetId = document.querySelector('.animals__infoAssetId').innerText
                    let animalsId = document.querySelector('.animals__infoId').innerText
                    let animalsAge = document.querySelector('.animals__age').value

                    fetch(`http://localhost:4000/api/v1/animals/${animalsId}`, {
                        "method": "PUT",
                        "headers": {
                          "Content-Type": "application/x-www-form-urlencoded",
                          "Authorization": `Bearer ${token}`
                        },
                        "body": `title=${formName}&content=${formMessage}&age=${animalsAge}&assetId=${animalsAssetId}`
                      })
                      .then(response => console.log(response))
                      .catch(err => console.error(err));
                }else{
                    document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
                } 
            })
        }
    })

    
    
   
     function validerName(form){  

        if(form.name.value.length == 0){
            form.name.focus();
            redo('#name')  
        }else{
            ok('#name')
            formName = form.name.value;
        };
        return true;
    }
    
    function validerText(form){
        if(form.text.value.length < 1){
            form.text.focus();
            redo('#text')
        }else{
            ok('#text')
            formText = form.text.value;
        }     
        return true;
    }

    function validerMessage(form){
        if(form.message.value.length == 0){
            form.message.focus();
            document.querySelector('#message').style.backgroundColor = '#ffaaaa';
            return false;
        }else{
            document.querySelector('#message').style.backgroundColor = 'transparent';
            formMessage = form.message.value
        };
        return true;
    }

    function validerImage(form){
        if(form.image.value != undefined){
            document.querySelector('.imageinfo').innerHTML = "Der er ikke valgt et billede"
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