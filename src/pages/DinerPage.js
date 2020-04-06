import React from 'react';
import Item from '../components/Item';

const diners = [
    {
        key:"1",
        image:"dinner_img1.jpg",
        card_title: "Kurczak w sosie",
        card_text:"Kurczak w kremowym sosie pomidorowo-koperkowym",
        modal_title: "Kurczak w sosie",
        modal_text_ingredients:[
            {key:"1", value:"2 pojedyncze filety kurczaka"},
            {key:"2", value:"2 łyżki oliwy + 1 łyżka masła"},
            {key:"3", value:"1 łyżka mąki pszennej"},
            {key:"4", value:"1 łyżka masła"},
            {key:"5", value:"1 łyżeczka papryki w proszku (słodkiej)"},
            {key:"6", value:"150 ml wody"},
            {key:"7", value:"1 łyżka sosu teriyaki, ewentualnie sojowego"},
            {key:"8", value:"1 łyżka koncentratu pomidorowego"},
            {key:"9", value:"125 ml śmietanki 30%"},
            {key:"10", value:"pęczek koperku (ok. 2 łyżki posiekanego)"},
        ],
        modal_text: "Kurczaka oczyścić z błonek i kostek, pokroić na mniejsze filety: odkroić polędwiczkę - ruchomą część filetu, następnie filet przekroić wzdłuż na 2 cieńsze części. Rozbić tłuczkiem na jednakową grubość, ok. 1 cm. Doprawić solą, pieprzem i delikatnie obtoczyć w mące. Rozgrzać patelnię z oliwą. Włożyć filety kurczaka, podsmażać po ok. 2 minuty z każdej strony. Odkładać na talerz jeśli smażymy kurczaka partiami i powtórzyć z resztą mięsa. Pod koniec smażenia posypać kurczaka papryką w proszku i dodać na patelnię masło. Włożyć całe mięso na patelnię i trzymać na ogniu. Oddzielnie wymieszać w miseczce wodę z sosem teriyaki, koncentratem, śmietanką i koperkiem. Wlać tę mieszankę na patelnię z mięsem i zagotować. Przekładać mięso na inne strony, jednocześnie gotując danie przez ok. 1 - 2 minuty, aż sos nabierze odpowiedniej gęstości.",
        modal_preparation_time: "45min.",
        modal_serving: "4 porcja",
        modal_difficulty: "średnie",
        id:"a",
    },
    {
        key:"2",
        image:"dinner_img2.jpg",
        card_title: "Łosoś z sosem holenderskim",
        card_text:"Łosoś z sosem holenderskim i młodymi ziemniakami",
        modal_title: "Łosoś z sosem holenderskim",
        modal_text_ingredients:[
                {key:"1",value:"4 filety łososia po ok. 150 g każdy"},
                {key:"2", value:"marynata: sól, pieprz, 2 łyżki oliwy, 2 łyżki sosu sojowego, 2 łyżki soku z cytryny, 2 łyżeczki miodu"},
                {key:"3", value:"1 porcja SOSU HOLENDERSKIEGO"},
        ],
        modal_text: "Odciąć skórkę z łososia. Podzielić na porcje, doprawić solą i pieprzem. Ułożyć w naczyniu żaroodpornym i zalać oliwą wymieszaną z sosem sojowym, sokiem z cytryny i miodem. Przygotować SOS HOLENDERSKI oraz dodatki (np. młode ziemniaki, surówka). Łososia piec w piekarniku na wysokiej mocy grilla przez ok. 10 minut lub w 220 stopniach C przez ok. 15 minut. Ułożyć na talerzech, polać sosem holenderskim i podawać z wybranymi dodatkami.",
        modal_preparation_time: "30min.",
        modal_serving: "4 porcja",
        modal_difficulty: "łatwe",
        id:"b",
    },
    {
        key:"3",
        image:"dinner_img3.jpg",
        card_title: "Schab z suszonymi pomidorami",
        card_text:"Schab z suszonymi pomidorami i kaszą ",
        modal_title: "Schab z suszonymi pomidorami",
        modal_text_ingredients:[
                {key:"1",value:"600 g schabu (w plastrach, wystekowanego/rozbitego)"},
                {key:"2", value:"2 łyżki oliwy"},
                {key:"3", value:"1 łyżeczka suszonego oregano"},
                {key:"4", value:"200 ml gorącej wody"},
                {key:"5",value:"100 ml białego wina półwytrawnego"},
                {key:"6", value:"2 łyżki sosu sojowego"},
                {key:"7", value:"ok. 10 kawałków suszonych pomidorów w oliwie + 2 łyżki oliwy z zalewy"},
                {key:"8", value:"1/2 łyżeczki mąki ziemniaczanej"},
        ],
        modal_text: "W szerokim garnku rozgrzać oliwę i włożyć plastry schabu. Obsmażyć na dużym ogniu z obu stron do zrumienienia, następnie doprawić solą, zmielonym pieprzem i suszonym oregano. Wlać gorącą wodę oraz wino. Doprawić sosem sojowym, dodać suszone pomidory oraz oliwę z zalewy. Przykryć i dusić na małym ogniu przez ok. 1 godzinę i 15 minut, lub do miękkości mięsa. Mniej więcej w połowie gotowania poprzekładać plastry mięsa na drugą stronę. Na koniec dodać przez sitko mąkę ziemniaczaną, wymieszać i zagotować.",
        modal_preparation_time: "20min.",
        modal_serving: "1 porcja",
        modal_difficulty: "łatwe",
        id:"c",
    },
]

function DinerPage(){
    const baseUrl="../images/"

    const points = diners.map(point => (
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

export default DinerPage;