import React from 'react';
import { TouchableHighlight, Text, View, Alert } from 'react-native';
import { TouchButton } from './TouchButton';


export class OperationPanel extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchButton color='rgba(250,250,0,0.4)' getNumber={this.props.getOper} number="+"></TouchButton>
                <TouchButton color='rgba(250,250,0,0.4)' getNumber={this.props.getOper} number="-"></TouchButton>
                <TouchButton color='rgba(250,250,0,0.4)' getNumber={this.props.getOper} number="*"></TouchButton>
                <TouchButton color='rgba(250,250,0,0.4)' getNumber={this.props.getOper} number="/"></TouchButton>
                <TouchButton color='rgba(0,0,0,0.4)' getNumber={this.props.getOper} number="="></TouchButton>
            </View>
        );
    }
}
