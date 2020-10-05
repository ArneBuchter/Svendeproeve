document.addEventListener('DOMContentLoaded', () => {

    const sections = 'http://localhost:4000/api/v1/adoptsections'
    const abouts = 'http://localhost:4000/api/v1/abouts'
    const volunteers = 'http://localhost:4000/api/v1/volunteers'
    const animals = 'http://localhost:4000/api/v1/animals'
    let file

    const token = sessionStorage.getItem("token");
    uploadImage()
    
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
                console.log(e.target)
                let myId = e.target.getAttribute('data-id')
                data.forEach(element => {
                    
                    if(element.id == myId){
                        document.querySelector('.abouts__overskrift').value = element.title
                        document.querySelector('.abouts__message').value = element.content
                        document.querySelector('.abouts__infoId').innerText = element.id
                        document.querySelector('.abouts__form').style.display = 'block'
                    }else if(e.target.getAttribute('data-id') == 0){
                        document.querySelector('.abouts__form').style.display = 'block'
                        document.querySelector('.abouts__infoId').innerText = data.length+1
                        document.querySelector('#abouts__submit').innerText = 'Opret'
                        document.querySelector('#abouts__delete').style.display = 'none'
                    }
                });
            })
        });
    })
    document.querySelector('#abouts__submit').addEventListener('click', (e) => {
        e.preventDefault()

        if(validerName(document.querySelector('#abouts')) && validerMessage(document.querySelector('#abouts'))){
            if(document.querySelector('#abouts__submit').innerText == 'Opret'){
                fetch("http://localhost:4000/api/v1/abouts", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${token}` },
                "body": `title=${formName}&content=${formMessage}`
                })
                .then(response => console.log(response))
                .catch(err => console.error(err));
            }else{
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
            }
        }else{
            document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
        } 
    })
    document.querySelector('#abouts__delete').addEventListener('click', (e) => {
                e.preventDefault()
                let myId = document.querySelector('.abouts__infoId').innerText
                fetch(`http://localhost:4000/api/v1/abouts/${myId}`, {
                "method": "DELETE",
                "headers": {
                    "Authorization": `Bearer ${token}`}
                })
                .then(response => console.log(response))
                .catch(err => console.error(err));
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
                        let myId = e.target.getAttribute('data-id')
                        data.forEach(element => {
                            if(element.id == myId){
                                document.querySelector('.volunteers__overskrift').value = element.title
                                document.querySelector('.volunteers__message').value = element.content
                                document.querySelector('.volunteers__tekst').value = element.extra
                                document.querySelector('.volunteers__infoId').innerText = myId
                                document.querySelector('.volunteers__infoAssetId').value = element.assetId
                                document.querySelector('.volunteers__form').style.display = 'block'
                            }else if(e.target.getAttribute('data-id') == undefined){
                                document.querySelector('.volunteers__form').style.display = 'block'
                                document.querySelector('.volunteers__infoId').innerText = data.length+1
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
                        "Authorization": `Bearer ${token}`},
                    "body": `title=${formName}&content=${formMessage}&extra=${formText}&assetId=${volunteersAssetId}`
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
    document.querySelector('#Volunteers__delete').addEventListener('click', (e) => {
        e.preventDefault()
        let myId = document.querySelector('.volunteers__infoId').innerText
        fetch(`http://localhost:4000/api/v1/volunteers/${myId}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Bearer ${token} `  }
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
    })
    fetch(`${animals}`,{
        'method': 'GET'
    }) //fetch
    .then(response => response.json())
    .then(data => {
        let template = document.querySelector('.animals__template')
        let list = document.querySelector('.animals__ul')
        data.forEach(pet => {
            
            let clone = template.content.cloneNode(true)
            clone.querySelector('.animals__link').innerText = pet.name
            clone.querySelector('.animals__link').setAttribute('data-id', `${pet.id}`) 
            list.appendChild(clone)
        });
        document.querySelector('.animals__ul').addEventListener('click', (e) => {
            let myId = e.target.getAttribute('data-id')
            data.forEach(element => {
                
                if(element.id == myId){
                    document.querySelector('.animals__overskrift').value = element.name
                    document.querySelector('.animals__tekst').value = element.description
                    document.querySelector('.animals__age').value = element.age
                    document.querySelector('.animals__infoId').innerText = element.id
                    document.querySelector('.animals__infoAssetId').value = element.assetId
                    document.querySelector('.animals__form').style.display = 'block'
                }else if(e.target.getAttribute('data-id') == 0){
                    document.querySelector('.animals__form').style.display = 'block'
                    document.querySelector('.animals__infoId').innerText = data.length+1
                    document.querySelector('#animals__submit').innerText = 'Opret'
                }
            });
        });             
    })
    document.querySelector('#animals__submit').addEventListener('click', (e) => {
        e.preventDefault()

        if(document.querySelector('#animals__submit').innerText == 'Opret'){
            let formAge = document.querySelector('.animals__age').value
            if(validerName(document.querySelector('#animals')) && validerMessage(document.querySelector('#animals'))){
                fetch("http://localhost:4000/api/v1/animals", {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${token}`},
                "body": `name=${formName}&description=${formMessage}&age=${formAge}&assetId=10`
                })
                .then(response => console.log(response))
                .catch(err => console.error(err));
            }else{
                document.querySelector('.form__udfyld').innerHTML += 'Et eller flere felter er ikke udfyldt korrekt. De er markeret med rødt.'
            }
        }else{

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
        }
    })
    document.querySelector('#animals__delete').addEventListener('click', (e) => {
        e.preventDefault()
        let myId = document.querySelector('.animals__infoId').innerText
        fetch(`http://localhost:4000/api/v1/animals/${myId}`, {
        "method": "DELETE",
        "headers": {
            "Authorization": `Bearer ${token}  `       }
        })
        .then(response => console.log(response))
        .catch(err => console.error(err));
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

    function redo(qs) {
        document.querySelector(qs).style.backgroundColor = '#ffaaaa';
        return false;
}

    function ok(qs) {
    document.querySelector(qs).style.backgroundColor = 'transparent';
    }

    function uploadImage() {
        fetch("http://localhost:4000/api/v1/assets", {
            "method": "GET"
        })
        .then(response => response.json())
        .then(data => {
            document.querySelector('.image__infoAssetId').innerText = data.length+1
        })
        .catch(err => console.error(err));

        document.querySelector('#image__submit').addEventListener('click', (e) => {
            e.preventDefault()
        
            if(validerImage(document.querySelector('#image__form'))){
                file = document.querySelector('input[type=file]').files[0]
                /* const form = new FormData(); */
                console.log(file)
                /* form.append('file', `${formImage}`); */

                fetch("http://localhost:4000/api/v1/assets", {
                "method": "POST",
                "headers": {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`
                },
                "body": `file=${file}`
                })
                .then(response => console.log(response))
                .catch(err => console.error(err));
            }
        })
    }

    
    function validerImage(form){

          return true;
    }

})