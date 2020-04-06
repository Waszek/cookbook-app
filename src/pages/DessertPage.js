import React from 'react';
import Item from '../components/Item';

const desserts = [
    {
        key:"1",
        image:"dessert_img1.jpg",
        card_title: "Placki serowe z truskawkami",
        card_text:"Placki serowe z truskawkami i cukrem pudrem",
        modal_title: "Placki serowe z truskawkami",
        modal_text_ingredients:[
                {key:"1", value:"250 g sera białego, twarogu"},
                {key:"2", value:"2 jajka"},
                {key:"3", value:"3 łyżki cukru"},
                {key:"4", value:"2 łyżki oleju roślinnego"},
                {key:"5", value:"2 łyżki oleju roślinnego"},
                {key:"6", value:"1 i 1/3 szklanki mąki pszennej"},
                {key:"7", value:"1 łyżka sosu teriyaki, ewentualnie sojowego"},
                {key:"8", value:"2 łyżeczki proszku do pieczenia"},
                {key:"9", value:"kilka truskawek"},
        ],
        modal_text: "Do miski włożyć twaróg i rozgnieść go praską do ziemniaków. Dodać jajka, cukier i wymieszać rózgą, następnie wlać olej oraz mleko i ponownie wymieszać. W drugiej misce wymieszać mąkę z proszkiem do pieczenia. Krótko połączyć składniki z dwóch misek za pomocą łyżki na dość gęstą masę. Rozgrzać patelnię (np. naleśnikową lub inną z nieprzywierającą powłoką), nakładać po 2 łyżki ciasta na jednego placka, wyrównać powierzchnię i smażyć na średnim ogniu do czasu aż urosną i będą ładnie zrumienione przez około 2,5 minuty. Gdy placki trochę podrosną wcisnąć w ciasto po ok. 4 plasterki truskawek. Przewrócić na drugą stronę i smażyć do zrumienienia w podobnym czasie jak poprzednio. Posypać cukrem pudrem.",
        modal_preparation_time: "50min.",
        modal_serving: "ok. 13sztuk",
        modal_difficulty: "łatwe",
        id:"a",
    },
    {
        key:"2",
        image:"dessert_img2.jpg",
        card_title: "Malinowy budyń jaglany",
        card_text:"Pyszny budyń jaglany z dodatkiem malin",
        modal_title: "Malinowy budyń jaglany",
        modal_text_ingredients:[
                {key:"1",value:"1/2 szklanki kaszy jaglanej"},
                {key:"2", value:"2 szklanki mleka"},
                {key:"3", value:"ok. 1/2 szklanki malin (świeżych lub mrożonych)"},
                {key:"4", value:"3 łyżki syropu/soku malinowego"},
        ],
        modal_text: "Do sitka wsypać kaszę jaglaną i wypłukać pod bieżącą wodą. Włożyć do rondelka, wlać mleko i zagotować pod przykryciem. Zmniejszyć ogień do minimum i gotować 15 minut nie otwierając garnka. Ugotowaną kaszę zmiksować w blenderze (stojącym, kielichowym) na gładki mus z dodatkiem (rozmrożonych) malin oraz syropu malinowego. Jeśli budyń jest za gęsty można dodać więcej mleka. Podawać z dodatkowymi malinami i/lub syropem malinowym.",
        modal_preparation_time: "25min.",
        modal_serving: "2 porcja",
        modal_difficulty: "łatwe",
        id:"b",
    },
    {
        key:"3",
        image:"dessert_img3.jpg",
        card_title: "Ciasteczka z czekoladą",
        card_text:"Kruche ciasteczka kakaowe z płynną czekoladą",
        modal_title: "Ciasteczka z czekoladą",
        modal_text_ingredients:[
                {key:"1",value:"100 g czekolady deserowej"},
                {key:"2", value:"100 g masła"},
                {key:"3", value:"1/2 szklanki cukru pudru"},
                {key:"4", value:"2 łyżki kakao"},
                {key:"5",value:"1 jajko"},
                {key:"6", value:"220 g (1 i 1/3 szklanki) mąki pszennej"},
                {key:"7", value:"1/2 łyżeczki sody"},
                {key:"8", value:"1/4 łyżeczki proszku do pieczenia"},
        ],
        modal_text: "Czekoladę podzielić na kostki. Masło pokroić i ocieplić w temperaturze pokojowej. Piekarnik nagrzać do 180 stopni C. Masło ubić na jasny krem razem z cukrem pudrem i kakao (ok. 5 minut). Dodać jajko i ubijać jeszcze przez ok. 3 minuty. W oddzielnej misce wymieszać mąkę z sodą oczyszczoną i proszkiem do pieczenia. Przesypać do ubitej masy i wymieszać. Masę podzielić na około 13 części. Formować placuszki, na środku kłaść po kostce czekolady i zlepiać dokładnie brzegi ciasta. Układać na blaszkę wyłożoną papierem do pieczenia. Wstawić do nagrzanego piekarnika i piec przez ok. 13 minut.",
        modal_preparation_time: "20min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"c",
    },
]

function DessertPage(){
    const baseUrl="../images/"

    const points = desserts.map(point => (
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

export default DessertPage;