# Opgavenavn: Svendeproeve

## Lavet af:
Arne Emil Buchter WUHF02
Applikation teknologi stack : Gulp, ejs, HTML, Scss, Javascript

siden kan ses på : Siden er ikke online 
login siden kan ses på : /admin

brugernavn admin
Adgangskode 1234

## Vurdering af din egen indsats og gennemførelse af opgaveforløbet

Jeg er godt tilfreds med min indsats for opgaven. Jeg har arbejdet intenst med projektet og holdt mig til at arbejde med projektet mellem 8.10 og 15.10 

Jeg havde hurtigt sat siden op og var allerede på 3. dag igang med min "backend", som jeg anser som den absolutte udfordring i dette projekt. Den side har jeg da også brugt en del tid på at rette til, lave om og optimere, for til sidst at måtte huske det min lærer har fortalt mig om at man nogengange må sige til sig selv, at selv om det kan blive bedre, så virker det nu. Ellers var der nok andre ting jeg ikke var kommet i mål med.

Jeg har stortset ikke oplevet problemer andre steder end login og backend og har befundet mig godt i hele opgaven. Jeg ville faktisk gerne, hvis tiden havde været der, have finpudset og skabt større wow effekt som f.eks. lazyload i sektionen med dyr hos os.

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

Jeg har efterhånden arbejdet med flere forskellige backends og synes tit de er meget overvældene. Derfor ville jeg prøve at gøre den lettere overskuelig, ved at få den til at ligne en simpel mappestruktur. 

### Nav i header

Det fremgik ikke af vores layout hvorhvidt headeren skulle være fastgjort til toppen af siden. Jeg tog derfor selv beslutningen om at det skulle den. særligt fordi det er en slags onepager, som bruger menupunkterne til at scrolle op og ned på siden.

### Parralax

Da der ikke fremgik af materialet hvordan "bannerne" skulle være valgte jeg at "peppe" det lidt kedelige udtryk siden havde lidt op, ved at lave de to "bannere længere nede på siden, som parralax. Da de ligger meget tæt på hinanden får den en klar effekt af at teksten mellem billederne gør at billedet skifter. Der ligger flere tanker bag denne beslutning. Både det at en fed effekt kan gøre brugernes oplevelser bedre, så de dermed bruger længere tid på siden eller kommer oftere igen og det at f.eks stykket om at kontakte dyrenes beskyttelse, bliver mere atraktivt for andre sider, som banner, da det ganske enkelt ser godt ud.

## Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen
### Min slider 

Min sider er lavet med tredjepartsoftware fra Flickety. Det har jeg arbejdet med før og synes det var det bedste alternativ, til at begynde at kode en slider fra bunden, når vi nu kun har en uge. Den kommer med et let setup, der gør at man hurtigt kan give den f.eks. en autoplay funktion, der pauser ved scroll.

### En beskrivelse af særlige punkter til bedømmelse

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




Bilag placeres sidst i dokumentation:
• Kanban board


