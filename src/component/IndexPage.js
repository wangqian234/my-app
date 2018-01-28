import React, { Component } from 'react';

class IndexPage extends Component {
    render() {
        return(
                <li className="selected">
                    <div className="cd-full-width">
                        <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="1">
                            <div className="row">
                                    <div className="tm-3-col-container">                                        
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
                                                <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                                                    <i className="fa fa-4x fa-pagelines tm-home-fa"></i>
                                                    <h2 className="tm-text-title">Hello Guest</h2>                                           
                                                    <p className="tm-text">Upper HTML Template contains different background images for pages. Please check <a href="/tm-494-motion" target="_parent">Motion Template</a> if you want to see video backgrounds. Feel free to download and use web templates from templatemo.</p>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
                                                <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                                                    <i className="fa fa-4x fa-bicycle tm-home-fa"></i>
                                                    <h2 className="tm-text-title">Welcome!</h2>
                                                    <p className="tm-text">There are 3 different gallaries in this template. You can customize them in any suitable way you prefer. You can also modify the content columns as you wish. Images are from Unsplash website. Good Luck!</p>
                                                </div>          
                                            </div>
                                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
                                                <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                                                    <i className="fa fa-4x fa-plane tm-home-fa"></i>
                                                    <h2 className="tm-text-title">Stay relaxed</h2>
                                                    <p className="tm-text">You can easily change icons in HTML codes by <a href="http://fontawesome.io/icons/" target="_parent">Font Awesome</a>. Praesent tempus dapibus. Curabitur sodales, est auctor congue vulputate, nisl tellus finibus nunc, vitae consectetur enim.</p>
                                                </div>          
                                            </div>                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                </li>
        );
    }
}

export default IndexPage;