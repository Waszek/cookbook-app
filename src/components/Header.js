import React,{ useState } from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import '../styles/Header.css';
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

function Header(){

    const [collapse, setCollapse] = useState(true);

    const collapse_nav = navList.map(item => (
        <li key={item.index} className="nav-item"><NavLink to={item.path} exact={item.exact ? item.exact : false} onClick={() => setCollapse(!collapse)}>{item.name}</NavLink></li>
    ))

    const classOne = collapse ? "collapse navbar-collapse" : 'collapse navbar-collapse show';
    
    return(
<>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={image1} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={image2} alt="Second slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={image3} alt="Third slide"/>
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>

    <nav className="navbar navbar-dark bg-dark" role="navigation">
        <div className="container">
            <div className="navbar-header">
            <button onClick={() => setCollapse(!collapse)} type="button" className="navbar-toggler" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className={`${classOne}`} id="bs-navbar-collapse">
                <ul className="nav navbar-nav">
                    {collapse_nav}
                </ul>
            </div>
        </div>
    </nav>
</>
    )
}

export default Header;