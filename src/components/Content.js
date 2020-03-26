import React from 'react';
import '../styles/Content.css';
import {Route, Switch} from 'react-router-dom';
import StartPage from '../pages/StartPage';
import BreakfastPage from '../pages/BreakfastPage';
import DinerPage from '../pages/DinerPage';
import DessertPage from '../pages/DessertPage';
import SupperPage from '../pages/SupperPage';
import SoupPage from '../pages/SoupPage';
import VegePage from '../pages/VegePage';
import CocktailPage from '../pages/CocktailPage';
import ErrorPage from '../pages/ErrorPage';


function Content(){
    return(
        <>
            <Switch>
                <Route path="/" exact component={StartPage}/>
                <Route path="/breakfast" component={BreakfastPage}/>
                <Route path="/diner" component={DinerPage}/>
                <Route path="/desserts" component={DessertPage}/>
                <Route path="/supper" component={SupperPage}/>
                <Route path="/soup" component={SoupPage}/>
                <Route path="/vege" component={VegePage}/>
                <Route path="/cocktails" component={CocktailPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </>
    )
}

export default Content;