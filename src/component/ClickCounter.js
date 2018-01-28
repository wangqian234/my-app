import React, { Component } from 'react';

class ClickCounter extends Component {

    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.state = {count : 0 };
    }

    onClickButton(){
        this.setState({count : this.state.count + 1})
    }

    render(){
        const clickerStyle = {
            margin : 'auto',
            width : '120px',
        }
        return (
            <div style={clickerStyle}>
                <button onClick={this.onClickButton}>click me</button>
                <div>
                    <p>click count : {this.state.count}</p>
                </div>
            </div>
        )
    }
}

export default ClickCounter;