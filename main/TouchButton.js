import React from 'react';
import { TouchableHighlight, Text, Alert } from 'react-native';

export class TouchButton extends React.Component {
  constructor(props) {
    super(props);
    this.updateNumber=this.updateNumber.bind(this);
  }
  updateNumber(){
    this.props.getNumber(this.props.number);
  } 
  render() {
    return (
      <TouchableHighlight underlayColor="white" style={{ backgroundColor: this.props.color, flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={this.updateNumber}>
        <Text style={{ fontSize: 30 }}>{this.props.number}</Text>
      </TouchableHighlight >

    );
  }
}
