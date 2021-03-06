import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './Pages/Main';

import Repository from './Pages/Repositories';

export default function Routes() {

    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/repository/:repository" component={Repository}/>

        </Switch>
    </BrowserRouter>
    )
    
}