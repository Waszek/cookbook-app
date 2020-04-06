import React from 'react';
import Item from '../components/Item';

const cocktails = [
    {
        key:"1",
        image:"cocktail_img1.jpg",
        card_title: "Jogurtowy koktajl z arbuza",
        card_text:"Jogurtowy koktajl z arbuza",
        modal_title: "Jogurtowy koktajl z arbuza",
        modal_text_ingredients:[
                {key:"1",value:"300 g miąższu arbuza bez pestek"},
                {key:"2", value:"250 ml jogurtu naturalnego"},
                {key:"3", value:"100 g lodów jogurtowych"},
        ],
        modal_text: "Składniki dokładnie zmiksować i gotowe! Smacznego :)",
        modal_preparation_time: "15min.",
        modal_serving: "2 porcja",
        modal_difficulty: "łatwe",
        id:"a",
    },
    {
        key:"2",
        image:"cocktail_img2.jpg",
        card_title: "Koktajl brzoskwiniowy",
        card_text:"Śniadaniowy shake z brzoskwinią i płatkami owsianymi",
        modal_title: "Koktajl brzoskwiniowy",
        modal_text_ingredients:[
                {key:"1",value:"2 łyżki płatków owsianych"},
                {key:"2", value:"1 brzoskwinia"},
                {key:"3", value:"1 mały banan"},
                {key:"2", value:"1 szklanka soku pomarańczowego lub jabłkowego"},
                {key:"3", value:"5 łyżek jogurtu naturalnego"},
        ],
        modal_text: "Płatki owsiane zalać małą ilością gorącej wody, odstawić na około 10 minut. Namoczone płatki zmiksować z brzoskwinią, obranym bananem, sokiem i jogurtem.",
        modal_preparation_time: "25min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"b",
    },
    {
        key:"3",
        image:"cocktail_img3.jpg",
        card_title: "Koktajl jagodowy",
        card_text:"Na jogurcie i soku owocowym, z dodatkiem banana",
        modal_title: "Koktajl jagodowy",
        modal_text_ingredients:[
                {key:"1",value:"4 łyżki jagód"},
                {key:"2", value:"1 banan ok. 200 - 250 g"},
                {key:"3", value:"200 g jogurtu naturalnego"},
                {key:"4", value:"100 ml soku jabłkowego lub ananasowego"},
        ],
        modal_text: "Do pojemnika blendera włożyć opłukane jagody i obranego banana. Dodać jogurt oraz sok, zmiksować.",
        modal_preparation_time: "20min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"c",
    },
]

function CocktailPage(){
    const baseUrl="../images/"

    const points = cocktails.map(point => (
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

export default CocktailPage;