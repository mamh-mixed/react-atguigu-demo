import React from 'react'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'


import Home from "./components/Home"
import About from "./components/About"
import Redux from "./components/Redux";
import AiNavLink from "./components/AiNavLink";

import './App.css'


export default class App extends React.Component {


    render() {
        return (
<div>
    <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
    </div>
    <div className="row">
        <BrowserRouter>

        <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
                {/* 原生html中靠 a标签跳转不同的页面 */}
                {/*<a className="list-group-item" href="./about.html">About</a>*/}
                {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                {/*在react中考 路由链接实现切换 Component*/}
                <AiNavLink to="/home">Home</AiNavLink>
                <AiNavLink to="/about">About...</AiNavLink>
                <AiNavLink to="/redux">Redux...</AiNavLink>
            </div>
        </div>

        <div className="col-xs-6">
            <div className="panel">
                <div className="panel-body">
                    <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/redux" component={Redux}/>
                    <Redirect to="/home"/>
                    </Switch>
                </div>
            </div>
        </div>
        </BrowserRouter>


    </div>
</div>
        )
    }


}




