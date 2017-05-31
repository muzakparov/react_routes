import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";
import Archives from "./pages/Archives";


const app = document.getElementById('app');
ReactDOM.render(
   <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="settings" component={Settings}></Route>
        <Route path="archives(/:articles)" component={Archives}></Route>
    </Route>
   </Router>
, app);
