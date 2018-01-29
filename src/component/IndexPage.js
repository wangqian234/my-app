import React, { Component } from 'react';
import BlockBox from './BlockBox';

class IndexPage extends Component {

    constructor(props) {
    
    super(props);

    this.blockTitle = [ 'Hello Guest', 'Welcome!', 'Stay relaxed'];
    this.blockContent = ['Upper HTML Template contains different background images for pages. Please check Motion Template if you want to see video backgrounds. Feel free to download and use web templates from templatemo.',
                        'There are 3 different gallaries in this template. You can customize them in any suitable way you prefer. You can also modify the content columns as you wish. Images are from Unsplash website. Good Luck!',
                        'You can easily change icons in HTML codes by Font Awesome. Praesent tempus dapibus. Curabitur sodales, est auctor congue vulputate, nisl tellus finibus nunc, vitae consectetur enim.']

  }

    render() {
        return(
                <li className="selected">
                    <div className="cd-full-width">
                        <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="1">
                            <div className="row">
                                    <div className="tm-3-col-container">
                                        <BlockBox blockTitle={this.blockTitle[0]} blockContent={this.blockContent[0]}/>
                                        <BlockBox blockTitle={this.blockTitle[1]} blockContent={this.blockContent[1]}/>
                                        <BlockBox blockTitle={this.blockTitle[2]} blockContent={this.blockContent[2]}/>                                       
                                    </div>
                            </div>
                        </div>
                    </div>
                </li>
        );
    }
}

export default IndexPage;