import React, { Component } from 'react';
import Counter from './Counter.js';
import ClickCounter from './ClickCounter.js';

const style = {
  margin: '20px'
};


class ControlPanel extends Component {

  constructor(props) {
    
    super(props);

    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.clickButton = this.clickButton.bind(this)

    this.initValues = [ 0, 10, 20];

    const initSum = this.initValues.reduce((a, b) => a+b, 0);
    this.state = {
      sum: initSum,
      updataOrNot: 0,
    };
  }

  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange, updataOrNot: 0});
  }

  clickButton(){
    this.setState({  updataOrNot: 1, sum: this.initValues.reduce((a, b) => a+b, 0) });
  }


  render() {
    console.log('enter ControlPanel render');
    return (
      <div style={style}>
        <Counter  onUpdate={this.onCounterUpdate} caption="第一个" initValue={this.initValues[0]} updataOrNot= {this.state.updataOrNot}/>
        <Counter  onUpdate={this.onCounterUpdate} caption="第二个" initValue={this.initValues[1]} updataOrNot={this.state.updataOrNot}/>
        <Counter  onUpdate={this.onCounterUpdate} caption="第三个" initValue={this.initValues[2]} updataOrNot={this.state.updataOrNot}/>
        <hr/>
        <button onClick={this.clickButton}>
          Click me to 回复原始状态!
        </button>

         <hr/>
        <div>Total Count: {this.state.sum}</div>
        <ClickCounter />
      </div>
    );
  }
}

export default ControlPanel;