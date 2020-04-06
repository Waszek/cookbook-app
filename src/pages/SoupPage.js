import React from 'react';
import Item from '../components/Item';

const soups = [
    {
        key:"1",
        image:"soup_img1.jpg",
        card_title: "Zupa z soczewicy",
        card_text:"Zupa z soczewicy z ziemniakami i kurczakiem",
        modal_title: "Zupa z soczewicy",
        modal_text_ingredients:[
                {key:"1",value:"2 łyżki oliwy"},
                {key:"2", value:"1 cebula"},
                {key:"3", value:"1 marchewka"},
                {key:"4",value:"2 litry bulionu"},
                {key:"5", value:"1/2 szklanki czerwonej soczewicy"},
                {key:"6", value:"3 ziemniaki"},
                {key:"7",value:"po 1/2 łyżeczki pieprzu, kurkumy, papryki słodkiej i oregano"},
                {key:"8", value:"1 pojedynczy filet z kurczaka"},
                {key:"9", value:"2/3 szklanki przecieru pomidorowego"},
        ],
        modal_text: "W garnku na oliwie zeszklić pokrojoną w kosteczkę cebulę. Dodać obraną i startą marchewkę i wymieszać, chwilę razem podsmażać. Wlać bulion i zagotować. Dodać przepłukaną soczewicę oraz obrane i pokrojone w kostkę ziemniaki. Doprawić pieprzem, kurkumą, papryką i oregano oraz solą w razie potrzeby. Gotować przez ok. 3 minuty. W gotującą się zupę włożyć pokrojoną w małą kosteczkę pierś kurczaka. Przykryć garnek i gotować przez ok. 8 minut. Wlać przecier pomidorowy i gotować jeszcze przez 3 - 5 minut. Posypać zieleniną (np. szczypiorek, natka, koperek, rzeżucha) i podawać np. z pieczywem.",
        modal_preparation_time: "35min.",
        modal_serving: "3 porcja",
        modal_difficulty: "średnie",
        id:"a",
    },
    {
        key:"2",
        image:"soup_img2.jpg",
        card_title: "Zupa koperkowa",
        card_text:"Prosty przepis na zupę koperkową z ziemniakami i marchewką.",
        modal_title: "Zupa koperkowa",
        modal_text_ingredients:[
                {key:"1",value:"1 łyżka masła"},
                {key:"2", value:"1 cebula"},
                {key:"3", value:"1 marchewka"},
                {key:"4",value:"3 ziemniaki"},
                {key:"5", value:"1 litr rosołu lub bulionu drobiowego lub warzywnego"},
                {key:"6", value:"szczypta kurkumy i szczypta papryki"},
                {key:"7",value:"3 łyżki posiekanego koperku"},
                {key:"8", value:"4 łyżki śmietany do zup 18%"},
        ],
        modal_text: "W garnku na maśle zeszklić pokrojoną w kosteczkę cebulę. Marchewkę obrać, pokroić wzdłuż na 4 części, następnie posiekać na cienkie plasterki. Dodać do garnka z cebulą i podsmażyć mieszając przez ok. 3 minuty. Dodać obrane i pokrojone w kosteczkę ziemniaki, doprawić solą, pieprzem oraz kurkumą i papryką. Mieszając smażyć przez ok. 3 minuy. Wlać bulion i zagotować. Przykryć i gotować przez ok. 15 minut do miękkości warzyw. Na 2 minuty przed końcem dodać posiekany koperek. Odstawić zupę z ognia i zaprawić śmietaną: najpierw wymieszać ją z kilkoma łyżkami wywaru, później dopiero dodać do garnka z zupą ciągle mieszając.",
        modal_preparation_time: "40min.",
        modal_serving: "4 porcja",
        modal_difficulty: "średnie",
        id:"b",
    },
    {
        key:"3",
        image:"soup_img3.jpg",
        card_title: "Zupa ogórkowa",
        card_text:"Zupa ogórkowa na rosole lub bulionie",
        modal_title: "Zupa ogórkowa",
        modal_text_ingredients:[
                {key:"1",value:"1 łyżka masła"},
                {key:"2", value:"1 łyżka oliwy"},
                {key:"3", value:"1 mała cebula"},
                {key:"4", value:"1 marchewka"},
                {key:"5",value:"1,5 litra bulionu (np. drobiowy, warzywny, rosół)"},
                {key:"6", value:"300 g ziemniaków (3 sztuki)"},
                {key:"7", value:"4 średnie kiszone ogórki"},
                {key:"8", value:"150 g śmietany 18%"},
                {key:"9", value:"4 łyżki posiekanego szczypiorku"},
        ],
        modal_text: "W garnku na maśle i oliwie zeszklić pokrojoną w kosteczkę cebulę. Dodać obraną i pokrojoną w kosteczkę marchewkę i mieszając smażyć przez ok. 3 minuty. Wlać gorący bulion i zagotować. Przykryć, zmniejszyć ogień i gotować przez ok. 5 minut. Dodać obrane i pokrojone w kosteczkę ziemniaki i gotować przez ok. 10 minut. Dodać starte na tarce obrane ogórki (małych nie trzeba obierać) oraz 1/2 szklanki soku z kiszonych ogórków (zalewy) jeśli mamy. Gotować przez ok. 10 minut. Odstawić z ognia. Dodać szczypiorek oraz zaprawioną śmietanę (najpierw wymieszaną z 2 łyżkami wody, potem z kilkoma łyżkami wywaru).",
        modal_preparation_time: "45min.",
        modal_serving: "4 porcja",
        modal_difficulty: "średnie",
        id:"c",
    },
]

function SoupPage(){
    const baseUrl="../images/"

    const points = soups.map(point => (
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

export default SoupPage;