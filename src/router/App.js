import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import IndexPage from '../component/IndexPage';
import TableList from '../component/TableList';
import ControlPanel from '../component/ControlPanel'

//import '../untiljs/jquery-1.11.3.min';
//import '../untiljs/tether.min';
//import '../untiljs/bootstrap.min';
//import '../untiljs/hero-slider-main';
//import '../untiljs/jquery.magnific-popup.min';

require('../css/bootstrap.min.css');
require('../css/hero-slider-style.css');
require('../css/magnific-popup.css');
require('../css/templatemo-style.css');

class App extends Component {
  render() {
    return (
        <Router>
        <header>
            <div className="cd-slider-nav">
                <nav className="navbar">
                    <div className="tm-navbar-bg">
                        <a className="navbar-brand text-uppercase" href=""><i className="fa fa-flash tm-brand-icon"></i>Upper</a>
                        <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">&#9776;</button>
                        <div className="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
                            <ul className="nav navbar-nav">
                                <li className="nav-item"><Link className="nav-link" to='/'>首页</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/tableList'>table2</Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/controlPanel'>click count</Link></li>
                                
                                <Route exact path="/" component={IndexPage} />
                                <Route path="/tableList" component={TableList} />
                                <Route path="/controlPanel" component={ControlPanel} />

                                {/*<li className="nav-item active selected">
                                    <a className="nav-link" href="#0" data-no="1">首页</a>
                                </li>                                
                                <li className="nav-item">
                                    <a className="nav-link" href="#0" data-no="2">点击记数</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0" data-no="3">表格</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#0" data-no="4">一个简单的组件</a>
                                </li>*/}
                            </ul>
                        </div>   
                    </div>
                </nav>
            </div>          
        </header>  
        </Router>       
    );
  }
}

// const indexPage = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('./../component/IndexPage').default)
//     }, 'indexPage')
// }

// const RouteConfig = (
//     <HashRouter>
//         <Route path="/" component={App}>
//             <Route component={IndexPage} />
//             <Route path="/indexPage" component={IndexPage} />
//             <Route path="/tableList" component={TableList} />
//         </Route>
//     </HashRouter>
// );

export default App;
