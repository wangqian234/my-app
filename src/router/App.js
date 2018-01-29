import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Bundle from './Bundle.js';

import IndexPage from '../component/IndexPage';
// import TableList from '../component/TableList';
// import ControlPanel from '../component/ControlPanel'
// import InputBox from '../component/InputBox'

// import '../untiljs/jquery-1.11.3.min';
// import '../untiljs/tether.min';
// import '../untiljs/bootstrap.min';
// import '../untiljs/hero-slider-main';
// import '../untiljs/jquery.magnific-popup.min';

require('../css/bootstrap.min.css');
require('../css/hero-slider-style.css');
require('../css/magnific-popup.css');
require('../css/templatemo-style.css');

class App extends Component {
  render() {
    return (
        <Router>
            <div>
            <header>
                <div className="cd-slider-nav">
                    <nav className="navbar">
                        <div className="tm-navbar-bg">
                            <a className="navbar-brand text-uppercase" href=""><i className="fa fa-flash tm-brand-icon"></i>React</a>
                            <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">&#9776;</button>
                            <div className="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item active selected"><Link className="nav-link" to='/'>首页</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/inputBox'>输入框测试</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/tableList'>table2</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to='/controlPanel'>click count</Link></li>
                                </ul>
                            </div>   
                        </div>
                    </nav>
                </div>          
            </header>
            <ul className="cd-hero-slider">
                <Route exact path="/" component={IndexPage} />
                <Route path="/inputBox" component={inputBox} />
                <Route path="/tableList" component={tableList} />
                <Route path="/controlPanel" component={controlPanel} />
            </ul>
            </div>
        </Router> 
    );
  }
}

const inputBox = (cb) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('../component/InputBox'));
        });
    }}>
        {(InputBox) => <InputBox />}
    </Bundle>
)

const tableList = (cb) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('../component/TableList'));
        });
    }}>
        {(TableList) => <TableList />}
    </Bundle>
)

const controlPanel = (cb) => (
    <Bundle load={(cb) => {
        require.ensure([], require => {
            cb(require('../component/ControlPanel'));
        });
    }}>
        {(ControlPanel) => <ControlPanel />}
    </Bundle>
)

export default App;
