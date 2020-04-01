import React from 'react';
import '../styles/Navigation.css';
import {NavLink} from 'react-router-dom';

const navList = [
    {index: "1", name: "Start", path: "/", exact: true},
    {index: "2", name: "Śniadanie", path: "/breakfast"},
    {index: "3", name: "Dania obiadowe", path: "/diner"},
    {index: "4", name: "Desery", path: "/desserts"},
    {index: "5", name: "Kolacja", path: "/supper"},
    {index: "6", name: "Zupy", path: "/soup"},
    {index: "7", name: "Dania vege", path: "/vege"},
    {index: "8", name: "Koktajle", path: "/cocktails"},

]

function Navigation(){

    const menu = navList.map(item => (
    <li key={item.name} ><NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
    ))

    return(
        <nav className="main">
            <ul>
                {menu}
            </ul>
        </nav>
    )
}

export default Navigation;