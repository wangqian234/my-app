import React, { Component } from 'react';
import InputList from './InputList';

class InputBox extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className="selected">
                <div className="cd-full-width">
                    <InputList />
                    <InputList />
                </div>
            </li>
        );
    }

}

export default InputBox;