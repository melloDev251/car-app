import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Content from '../../pages/Content';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Navbar from '../Navbar';

const index = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profil" exact component={Profil} />
                <Route path="/content" exact component={Content} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};

export default index;