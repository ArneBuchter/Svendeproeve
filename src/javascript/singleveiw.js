document.addEventListener('DOMContentLoaded', () => {

    let params = new URLSearchParams(document.location.search);
    const produktId = parseInt(params.get('produkt_id'));

    let token = localStorage.getItem("token");
    let obj = JSON.parse(token);
    
    fetch('something')
        .then(function(response){
            return response.json();
        })

        .then((data) => {
            const produkt = data.produkter.find((Element) => {
                return Element.id === produktId;
            })
        })
})