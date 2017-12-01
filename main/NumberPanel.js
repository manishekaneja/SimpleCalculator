import React from 'react';
import { TouchableHighlight, Text, View, Alert } from 'react-native';
import { TouchButton } from './TouchButton';


export class NumberPanel extends React.Component {
    render() {
        return (
            <View style={{ flex: 3 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="1"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="2"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="3"></TouchButton>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="4"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="5"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="6"></TouchButton>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="7"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="8"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="9"></TouchButton></View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="AC"></TouchButton>
                    <TouchButton color='rgba(0,0,250,0.4)' getNumber={this.props.getNumber} number="0"></TouchButton>
                </View>
            </View>

        );
    }
}
