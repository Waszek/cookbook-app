import React from 'react';
import Item from '../components/Item';

const suppers = [
    {
        key:"1",
        image:"supper_img1.jpg",
        card_title: "Sałatka z awokado, wędzoną rybą i oliwkami",
        card_text:"Sałatka z awokado, wędzonym halibutem, zielonymi oliwkami, natką pietruszki i cebulą.",
        modal_title: "Sałatka z awokado, wędzoną rybą i oliwkami",
        modal_text_ingredients:[
                {key:"1",value:"40 g (2 garście) rukoli"},
                {key:"2", value:"1 awokado"},
                {key:"3", value:"100 g wędzonej ryby"},
                {key:"4",value:"1/2 małej cebuli"},
                {key:"5", value:"10 zielonych oliwek"},
                {key:"6", value:"2 łyżki listków natki pietruszki"},
                {key:"7",value:"2 łyżki oliwy extra vergine"},
                {key:"8", value:"sok z 1/2 cytryny"},
                {key:"9", value:"sól, pieprz"},
        ],
        modal_text: "Rukolę ułożyć w salaterkach, Awokado przekroić na pół, wyjąć pestkę, wydrążyć środek i pokroić na kawałki. Ułożyć na rukoli. Wędzoną rybę pokroić na kawałki a cebulę w cienkie półplasterki, dodać do sałatki. Doprawić solą i świeżo zmielonym pieprzem. Posypać wszystko natką pietruszki i oliwkami, następnie polać oliwą extra vergine oraz skropić sokiem z cytryny.",
        modal_preparation_time: "25min.",
        modal_serving: "2 porcja",
        modal_difficulty: "łatwe",
        id:"a",
    },
    {
        key:"2",
        image:"supper_img2.jpg",
        card_title: "Szaszłyki z kiełbasy w cieście francuskim",
        card_text:"Bardzo prosty przepis na pyszną przekąskę ",
        modal_title: "Szaszłyki z kiełbasy w cieście francuskim",
        modal_text_ingredients:[
                {key:"1",value:"375 g ciasta francuskiego"},
                {key:"2", value:"500 g dobrej kiełbasy np. wiejskiej"},
                {key:"3", value:"patyczki szaszłykowe"},
                {key:"4", value:"1 łyżka majeranku"},
        ],
        modal_text: "Piekarnik nagrzać do 220 stopni C. Ciasto francuskie przekroić wzdłuż na 2 paski o szerokości ok. 15 cm. Kiełbasę obrać jeśli jest taka konieczność (kiełbasy wiejskiej nie obieram), pokroić na kawałki o długości odpowiadającej szerokości pasków ciasta francuskiego. Każdy kawałek kiełbasy zawinąć w jedną warstwę ciasta francuskiego, następnie pokroić na ok. 2 cm plasterki. Nadziać je na patyczki szaszłykowe, po ok. 4 plasterki na każdy szaszłyk. Ułożyć na dużej blaszce do pieczenia wyłożonej papierem do pieczenia. Posypać majerankiem. Piec przez ok. 25 - 30 minut na złoty kolor.",
        modal_preparation_time: "45min.",
        modal_serving: "6 porcja",
        modal_difficulty: "średnie",
        id:"b",
    },
    {
        key:"3",
        image:"supper_img3.jpg",
        card_title: "Zapiekanki z pieczarkami i serem",
        card_text:"Najlepsze domowe zapiekanki",
        modal_title: "Zapiekanki z pieczarkami i serem",
        modal_text_ingredients:[
                {key:"1",value:"1 bagietka"},
                {key:"2", value:"400 g pieczarek"},
                {key:"3", value:"1 cebula"},
                {key:"4", value:"2 łyżki masła (np. klarowanego)"},
                {key:"1",value:"sól i pieprz"},
                {key:"2", value:"opcjonalnie: 150 g szynki"},
                {key:"3", value:"150 g tartego sera np. mozzarella"},
                {key:"4", value:"ketchup"},
        ],
        modal_text: "Bagietkę przekroić na 2 równe części, następnie wzdłuż na pół. Pieczarki umyć, osuszyć i drobno posiekać na desce. Cebulę obrać i pokroić w małą kosteczkę. Na patelni rozgrzać łyżkę masła, włożyć cebulę i zeszklić ją. Dodać posiekane lub starte na tarce pieczarki, kolejną łyżkę masła i smażyć co chwilę mieszając przez około 5 minut, pod koniec doprawić solą oraz pieprzem. Jeśli usmażone pieczarki mają większe kawałki można je rozdrobnić w melakserze. Piekarnik nagrzać do 200 stopni C. Farsz pieczarkowy wyłożyć na bułki, posypać opcjonalnie pokrojoną w kosteczkę szynką, następnie tartym serem. Ułożyć na blaszce do pieczenia i wstawić do nagrzanego piekarnika. Piec do zrumienienia przez ok. 7 minut. Podawać z ketchupem.",
        modal_preparation_time: "30min.",
        modal_serving: "2 porcja",
        modal_difficulty: "łatwe",
        id:"c",
    },
]

function SupperPage(){
    const baseUrl="../images/"

    const points = suppers.map(point => (
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

export default SupperPage;