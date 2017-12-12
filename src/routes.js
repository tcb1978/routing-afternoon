import React from "react";
import { Route, Switch} from "reaact-router-dom";
import Home from './Home/Home.js';
import About from './About/About.js';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    )
}
