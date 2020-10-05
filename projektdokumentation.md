# Opgavenavn: Svendeproeve

## Lavet af:
Arne Emil Buchter WUHF02
Applikation teknologi stack : Gulp, ejs, HTML, Scss, Javascript

siden kan ses på : Siden er ikke online 
login siden kan ses på : /admin

brugernavn admin
Adgangskode 1234

Github adresse: https://github.com/ArneBuchter/Svendeproeve

## Vurdering af din egen indsats og gennemførelse af opgaveforløbet

Jeg er godt tilfreds med min indsats for opgaven. Jeg har arbejdet intenst med projektet og holdt mig til at arbejde med projektet mellem 8.10 og 15.10 

Jeg havde hurtigt sat siden op og var allerede på 3. dag igang med min "backend", som jeg anser som den absolutte udfordring i dette projekt. Den side har jeg da også brugt en del tid på at rette til, lave om og optimere, for til sidst at måtte huske det min lærer har fortalt mig om at man nogengange må sige til sig selv, at selv om det kan blive bedre, så virker det nu. Ellers var der nok andre ting jeg ikke var kommet i mål med.

Jeg har stortset ikke oplevet problemer andre steder end login og backend og har befundet mig godt i hele opgaven. Jeg ville faktisk gerne, hvis tiden havde været der, have finpudset og skabt større wow effekt som f.eks. lazyload i sektionen med dyr hos os.

Jeg har det sidste stykke tid af mandagen kæmpet hårdt med få min backend afsluttet. Jeg har haft store problemer med upload af billeder til api'et. Det viste sig efter lang tids forsøg, at når man manuelt angiver content-type i headeren, så skal man også bruge en boundry. I det givne fetch eksempel i api'et ser ud som følger:

    const form = new FormData();
    form.append("file", "null");

    fetch("http://localhost:4000/api/v1/assets", {
    "method": "POST",
    "headers": {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTUkdXlKQjU5OHpqQ0VpQno2cUY0UDlLLlhrUGRESXd5ajJjd1FXU1lRczNIbHY1TUZsbUxJTlciLCJjcmVhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoiLCJ1cGRhdGVkQXQiOiIyMDIwLTA1LTE3VDE4OjE5OjM5LjE2OVoifSwiaWF0IjoxNTg5NzQzNDI4LCJleHAiOjE1ODk3NDcwMjh9.RQlQN6Aj8Ypvso2B81fPLfGZ9Vj9YelqHLT9KKGFxqE"
    },
    "body": form
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));

Hvis det skal virke rigtigt, skal Content-Type altså fjernes, ellers mangler der en boundry, hvilket betyder at filen, som splittes op bidder idet den sendes. Ikke kan findes når den rammer api'et. Hvis man derimod fjerner Content-Type genererer fetch selv en passende boundry. 

## Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

### Applikation teknologi stack

Mit projekt er blevet kodet med HTML Scss og Javascript. Jeg arbejder med Ejs og Gulp, da jeg føler mig tryg i at kode med dette setup og synes det var et godt setup i forhold til den udleverede opgave. 

Jeg har også valgt at min navngivningsstruktur på mine classes er BEM Dette foretrækker jeg til hver en tid over specificity, da det er meget nemmere at have kontrol med importance når alt ligger i klasser.

### Slideren

Jeg har valgt at lægge min slider i sektionen om "dyr hos os", da jeg mente at det var en god måde for brugeren at danne sig et overblik over hvilke dyr der var , via en slider med billederene af dyrene. Jeg synes også at det gav mening at den ikke lå i et helt andet afsnit, da det først er her brugerens fokus er på netop det.

### Login

Dette er den mest simple side og jeg prøvede designmessigt at få den til at ligne frontenden mht farvevalg.
Jeg har samtidig valgt at lægge en spinner på, da der går lang tid fra man trykker login, til der sker noget.
 
### Backenden 

Jeg har efterhånden arbejdet med flere forskellige backends og synes tit de er meget overvældene. Derfor ville jeg prøve at gøre den lettere overskuelig, ved at få den til at ligne en simpel mappestruktur. Når man klikker på de ting man vil ændre kommer selve formen op, med de forskellige valgmuligheder. I backenden arbejder jeg med crud funktionerne. GET, PUT, POST og DELETE.

### Nav i header

Det fremgik ikke af vores layout hvorhvidt headeren skulle være fastgjort til toppen af siden, men jeg tror ikke det oprindeligt var meningena at den skulle være fastgjort(fixed). Jeg tog derfor selv beslutningen om at det skulle den, særligt fordi siden er en slags onepager, som bruger menupunkterne til nemmere at scrolle op og ned på siden. Det ville derfor være en ligegyldig nav, hvis man hver gang, skulle vende tilbage til toppen, for derefter at blive sendt længere ned ad siden.

### Parralax

Da der ikke fremgik af materialet hvordan "bannerne" skulle være, valgte jeg at "peppe" det lidt kedelige udtryk siden havde lidt op, ved at lave de to "bannere længere nede på siden, som parralax. Da de ligger meget tæt på hinanden får den en klar effekt af at teksten mellem billederne gør at billedet skifter i baggrunden, som en slags slideshow. Der ligger flere tanker bag denne beslutning. Både det at en fed effekt kan gøre brugernes oplevelser bedre, så de dermed bruger længere tid på siden eller kommer oftere igen og det at f.eks stykket om at kontakte dyrenes beskyttelse, bliver mere atraktivt at intigrere for andre sider, som banner, da det ganske enkelt ser godt ud.

## Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen
### Min slider 

Min sider er lavet med tredjepartsoftware fra Flickety. Det har jeg arbejdet med før og synes det var det bedste alternativ, til at begynde at kode en slider fra bunden, når vi nu kun har en uge. Den kommer med et let setup, der gør at man hurtigt kan give den f.eks. en autoplay funktion, der pauser ved scroll.

## En beskrivelse af særlige punkter til bedømmelse

### responsive grid

Jeg vil i min css gerne fremhæve mit responsive grid, da jeg synes det er en særlig fed ting mulighed der er kommet med grid. 
Det er en metode jeg har lært fra min css youtube guru Jen Simmons, der betyder at man næsten ikke/ slet ikke behøver at bruge mediaquery til responsivt design. Det særlige her er at cellerne selv flytter sig alt efter device. lidt som med flexwrap. se kodeeksemplet herunder.

    &__content{
        width: $innerwidth;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        grid-auto-rows: auto;
        gap: 1em;
    }



auto-fit fortæller hvor stor cellen skal være hhv min og max og derudover fortæller den også at en gridcelle skal flytte sig til næste linie, hvis der ikke er plads til flere. På den måde tilpasser gridet sig til skærmstørrelsen. Det er en super genial feature til netop præsentation af "kort" eller billeder.   

### Se dyr på singleview side

for at se dyrene på en detaljeside, som jeg har valgt at kalde singleview, har jeg arbejdet med url parametre. Det sker hos mig ved at man medsender dyrets id i url'en sådan her:


    clone.querySelector('.adopterdyr__card').href = `/singleview/index.html?id=${element.id}

    let params = new URLSearchParams(document.location.search);
    const id = parseInt(params.get('id'));
    const animal = `http://localhost:4000/api/v1/animals/${id}`


Den første linie kode er en linie fra det template der skaber kortet (info om et givent dyr). Den linie der vises fortæller os at kortets wrapper, som er et a tag hvor href'en henviser til singleview siden også sender dyrets unikke id med i en query

De tre næste linier er fra singleview siden hvor vi så trækker informationerne ud fra url'en og putter id'et i api'ets get single animal endpoint. på den måde kan jeg nu vise en detaljeside med præcis det dyr brugeren ønsker at se.


## Kanban board

Mit kanban board kan ses på github i mit repo under github projects og her på dette billede. Der ligger en lang række opgaver i Done, som ikke kunne komme med på kun et billede

![kanbanboard](kanban.jpg)




