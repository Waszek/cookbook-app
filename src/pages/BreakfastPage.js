import React from 'react';
import Item from '../components/Item';

const breakfasts = [
    {
        key:"1",
        image:"card_img1.jpg",
        card_title: "Jajecznica",
        card_text:"Pyszna jajecznica ze szczypiorkiem i pomidorami koktailowymi",
        modal_title: "Jajecznica",
        modal_text_ingredients:[
                {key:"1",value:"3 jajka"},
                {key:"2", value:"2 liście szczypiorku"},
                {key:"3", value:"80g pomidorów koktajlowych"},
        ],
        modal_text: "Na patelni rozpuścić łyżkę masła. Gdy stanie się płynne, wbić bezpośrednio trzy jajka. Delikatnie i bardzo wolno mieszam. Lekko solę. Gdy zaczną się ścinać dolewam 2-3 łyżki mleka lub śmietanki i smażę jeszcze przez chwilę. Przekładam na talerz i jajecznica gotowa!",
        modal_preparation_time: "15min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"a",
    },
    {
        key:"2",
        image:"card_img2.jpg",
        card_title: "Jajka z chorizo",
        card_text:"Jajka z chorizo z dodatkiem sosu pomidorowego",
        modal_title: "Jajka z chorizo w sosie pomidorowym",
        modal_text_ingredients:[
                {key:"1",value:"75 g kiełbaski chorizo"},
                {key:"2", value:"200 ml przecieru pomidorowego lub krojonych pomidorów"},
                {key:"3", value:"4 jajka"},
        ],
        modal_text: "Na patelni na małym ogniu podsmażyć pokrojone w plasterki chorizo (przez kilka minut aż wytopi się tłuszcz). Ostrożnie wlać sos pomidorowy (może pryskać) i zagotować. Wbić jajka i na małym ogniu gotować ok. 10 minut bez mieszania (na ostatnie 3 minuty ewentualnie przykryć pokrywką aby białka się ścięły).",
        modal_preparation_time: "25min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"b",
    },
    {
        key:"3",
        image:"card_img3.jpg",
        card_title: "Jaglanka z pekanami i syropem klonowym",
        card_text:"Jaglanka, orzechy i syrop klonowy.. Pycha",
        modal_title: "Jaglanka z pekanami i syropem klonowym",
        modal_text_ingredients:[
                {key:"1",value:"1/4 szklanki kaszy jaglanej"},
                {key:"2", value:"1 szklanka mleka (krowiego lub roślinnego)"},
                {key:"3", value:"garść orzechów pekan"},
                {key:"4", value:"2 łyżki syropu klonowego"},
        ],
        modal_text: "Kaszę jaglaną wsypać do garnka, wypłukać 2 razy zmieniając wodę. Wylać wodę z płukania, wlać mleko, wymieszać i zagotować pod przykryciem. Ustawić garnek na najmniejszym palniku, zmniejszyć ogień do minimum i gotować pod przykryciem przez ok. 12 minut. Ugotowaną kaszę jaglaną wyłożyć do miseczki, dodać posiekane orzechy pekan i polać syropem klonowym.",
        modal_preparation_time: "20min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"c",
    },
    {
        key:"4",
        image:"card_img4.jpg",
        card_title: "Tosty z awokado, jajkiem i sosem holenderskim",
        card_text:"Tosty na każdą okazję!",
        modal_title: "Tosty z awokado, jajkiem w koszulce i sosem holenderskim",
        modal_text_ingredients:[
                {key:"1",value:"1/2 porcji sosu holenderskiego"},
                {key:"2", value:"1 awokado"},
                {key:"3", value:"masło"},
                {key:"4", value:"2 jajka"},
                {key:"5", value:"listki bazylii lub natki do dekoracji"},
        ],
        modal_text: "Przygotować sos holenderski. Awokado umyć, przekroić wzdłuż na pół, usunąć pestkę oraz skórkę (najwygodniej wybrać miąższ łyżką). Pokroić na plasterki. Tosty lub bułkę opiec w tosterze lub na patelni. Ułożyć na talerzu, posmarować masłem, przykryć awokado, doprawić solą i pieprzem. Zagotować osoloną wodę w średnim garnku na głębokość ok. 10 cm. Gdy woda będzie się gotować, zmniejszyć ogień do średniego i zrobić wir wodny mieszając łyżką. Wbić jajka do miseczek, następnie przelać delikatnie do wirującej wody. Gotować przez ok. 2,5 - 3 minuty aż białko będzie ścięte, a żółtko pozostanie miękkie. Wyjąć jajka z wody (najlepiej łyżką cedzakową) i ułożyć na awokado, doprawić solą i pieprzem. Na jajka wyłożyć sos holenderki, udekorować zielonymi listkami.",
        modal_preparation_time: "30min.",
        modal_serving: "1 porcja",
        modal_difficulty: "średnie",
        id:"d",
    },
    
    
    
]

function BreakfastPage(){
    const baseUrl="../images/"

    const points = breakfasts.map(point => (
        <Item 
            key={point.key}
            imgSrc={baseUrl+point.image}
            {...point}      
        />
    ));

    return(
        <>        
            {points}
        </>
    )
}

export default BreakfastPage;