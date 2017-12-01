import React from 'react';
import { StyleSheet, Text, TouchHighlight, Button, Alert, View, TouchableHighlight } from 'react-native';
import { TouchButton } from './main/TouchButton';
import { NumberPanel } from './main/NumberPanel';
import { OperationPanel } from './main/OperationPanel';
import { ScreenPanel } from './main/ScreenPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'number': "0",
      'operator': "",
      'preValue': "",
    }
    this.updateNumber = this.updateNumber.bind(this);
    this.updateOperator = this.updateOperator.bind(this);
  }
  updateNumber(number) {
    if (number == "AC") {
      this.setState({
        'number': "0",
        'operator': "",
        'preValue': ""
      })
    } else if (this.state.number == "0" || this.state.operator == "=") {
      this.setState({ 'number': number, 'operator': "" });
    }
    else {
      this.setState({ 'number': this.state.number + number });
    }
  }
  updateOperator(operator) {
    if (this.state.preValue == "0" && this.state.operator == "") {
      this.setState({
        'preValue': this.state.number + operator,
        'operator': "",
        'number': "0"
      });
    }
    else if (operator == "=") {
      this.setState({ 'number': eval(this.state.preValue + this.state.number), 'preValue': " ", 'operator': operator });
    }
    else {
      this.setState({ 'preValue': this.state.preValue + this.state.number + operator, 'operator': "", 'number': "0" })
    }
  }
  render() {
    return (<View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <Text style={{ flex: 1 }}>_</Text>
        <Text style={{ flex: 1, color: 'white' }} >Calculator</Text>
      </View>
      <ScreenPanel result={this.state.number} oper={this.state.operator} preresult={this.state.preValue} />
      <View style={{ flex: 10, backgroundColor: 'lightgreen', flexDirection: 'row' }}>
        <NumberPanel getNumber={this.updateNumber} />
        <OperationPanel getOper={this.updateOperator} />

      </View>
    </View>

    );
  }
}
