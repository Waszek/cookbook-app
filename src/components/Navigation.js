import React from 'react';
import '../styles/Navigation.css';
import {NavLink} from 'react-router-dom';

const navList = [
    {name: "Start", path: "/", exact: true},
    {name: "Śniadanie", path: "/breakfast"},
    {name: "Dania obiadowe", path: "/diner"},
    {name: "Desery", path: "/desserts"},
    {name: "Kolacja", path: "/supper"},
    {name: "Zupy", path: "/soup"},
    {name: "Dania vege", path: "/vege"},
    {name: "Koktajle", path: "/cocktails"},

]

function Navigation(){

    const menu = navList.map(item => (
    <li key={item.name}><NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink></li>
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