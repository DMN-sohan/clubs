import React from "react";
import Home from "pages/home";
import Euphoria from "pages/euphoria";
import Clubs from "pages/clubs";
import AboutUs from "pages/aboutUs";
import Page404 from "pages/page404";
import Loading from "pages/loading";
import Access from "pages/access";

import { getSessionStorage } from "util/SessionStorage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
    }
`;

const App = () => {

    const subdomains = getSessionStorage("subdomains");

    return (
        <Router>
            <GlobalStyles />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/home' component={Home}/>
                <Route exact path='/euphoria' component={Euphoria}/>
                <Route exact path='/clubs' component={Clubs}/>
                <Route exact path='/about-us' component={AboutUs}/>
                <Route exact path='/loading' component={Loading}/>
                <Route exact path='/access' component={Access}/>

                {Object.keys(subdomains).map((key) => (
                  <Route
                    exact
                    path={subdomains[key].link}
                    render={(props) => <Clubs {...props} keyProp={key} />}
                    />
                ))}

                <Route component={Page404}/>
            </Switch>
        </Router>
    );
};

export default App;