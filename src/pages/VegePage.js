import React from 'react';
import Item from '../components/Item';

const vege = [
    {
        key:"1",
        image:"vege_img1.jpg",
        card_title: "Surówka z młodej kapusty",
        card_text:"Pyszna i zdrowa sezonowa surówka z młodej kapusty.",
        modal_title: "Surówka z młodej kapusty",
        modal_text_ingredients:[
                {key:"1",value:"1/2 główki młodej kapusty"},
                {key:"2", value:"1 młoda cebula"},
                {key:"3", value:"2 marchewki"},
                {key:"4",value:"1 pęczek koperku"},
                {key:"5", value:"3 łyżki oleju roślinnego lub oliwy"},
                {key:"6", value:"1 łyżka soku z cytryny"},
        ],
        modal_text: "Kapustę umyć, osuszyć, drobno poszatkować i włożyć do większej miski. Dodać pokrojoną w drobną kosteczkę cebulę, obraną i startą na tarce marchewkę oraz posiekany koperek. Wlać olej lub oliwę, sok z cytryny, doprawić całość solą oraz pieprzem, wymieszać.",
        modal_preparation_time: "25min.",
        modal_serving: "4 porcja",
        modal_difficulty: "łatwe",
        id:"a",
    },
    {
        key:"2",
        image:"vege_img2.jpg",
        card_title: "Smoothie z buraka i ananasa",
        card_text:"Smoothie z buraka i ananasa z bananem i imbirem.",
        modal_title: "Smoothie z buraka i ananasa",
        modal_text_ingredients:[
                {key:"1",value:"1 burak średniej wielkości (ugotowany lub świeży)"},
                {key:"2", value:"1/3 świeżego ananasa"},
                {key:"3", value:"1 banan"},
                {key:"4",value:"1 pomarańcza (wyciśnięty sok)"},
                {key:"5", value:"ok. 2 cm kawałek imbiru"},
                {key:"6", value:"1 szklanka zimnej wody"},
                {key:"7", value:"sok z 1/2 limonki lub cytryny"},
        ],
        modal_text: "Jeśli gotujemy buraka należy go umyć (nie obierać). Włożyć do garnka, zalać wodą i gotować do miękkości przez ok. 1 godzinę i 15 minut. Odcedzić, ostudzić i obrać ze skórki. Buraka ugotowanego lub świeżego pokroić na kawałki i włożyć do pojemnika blendera. Ananasa umyć i odkroić potrzebą część. Obrać dość grubo ze skórki, tak aby pozostał sam miękki miąższ, odkroić twardy środek. Miąższ pokroić na kawałki i dodać do buraka. Dodać obranego banana, sok z pomarańczy, obrany i pokrojony na plasterki imbir, wodę oraz sok z limonki lub cytryny. Zmiksować w stojącym blenderze na gładkie smoothie.",
        modal_preparation_time: "35min.",
        modal_serving: "2-3 porcja",
        modal_difficulty: "łatwe",
        id:"b",
    },
    {
        key:"3",
        image:"vege_img3.jpg",
        card_title: "Owsianka kokosowa z malinami",
        card_text:"Pyszna, aksamitnie kremowa owsianka kokosowa z malinami.",
        modal_title: "Owsianka kokosowa z malinami",
        modal_text_ingredients:[
                {key:"1",value:"1 szklanka płatków owsianych górskich"},
                {key:"2", value:"1 łyżka cukru"},
                {key:"3", value:"1 szklanka mleka kokosowego (z puszki)"},
                {key:"4", value:"1 szklanka mrożonych lub świeżych malin"},
                {key:"4", value:"opcjonalnie: syrop klonowy i/lub świeży sok z pomarańczy"},
        ],
        modal_text: "Płatki owsiane wsypać do garnka i zalać większą ilością wody z kranu, wymieszać i wylać mętną wodę, powtórzyć jeszcze 2 - 3 razy aż woda będzie czysta bez resztek łusek ziarna. Wlać świeżą wodę w ilości 1 i 1/2 szklanki i zagotować. Zmniejszyć ogień, przykryć i gotować przez ok. 8 minut, w międzyczasie kilka razy zamieszać. Zdjąć pokrywę, dodać mleko kokosowe oraz cukier do smaku, wymieszać i zagotować. Gotować przez ok. 5 minut co chwilę mieszając. Maliny włożyć do odzielnego garnka i mieszając podgrzewać aż się rozpadną. Wyłożyć na porcje owsianki, można dodatkowo polać syropem klonowym lub sokiem pomarańczowym.",
        modal_preparation_time: "40min.",
        modal_serving: "3 porcja",
        modal_difficulty: "łatwe",
        id:"c",
    },
]

function VegePage(){
    const baseUrl="../images/"

    const points = vege.map(point => (
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

export default VegePage;