import React, { Component} from 'react';
import PropTypes from 'prop-types';

class BlockBox extends Component {

  render() {
    const {blockTitle} = this.props;
    const {blockContent} = this.props;
    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
            <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                <i className="fa fa-4x fa-pagelines tm-home-fa"></i>
                <h2 className="tm-text-title">{blockTitle}</h2>
                <p className="tm-text">{blockContent}</p>
            </div>
        </div>
    );
  }

}

BlockBox.propTypes = {
  blockTitle: PropTypes.string.isRequired,
  blockContent: PropTypes.string.isRequired,
};

export default BlockBox;