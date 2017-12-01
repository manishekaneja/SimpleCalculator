import React from 'react';
import { StyleSheet, Text, TouchHighlight, Button,Alert, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  render() {
    return (<View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <Text style={{ flex: 1 }}>_</Text>
        <Text style={{ flex: 1, color: 'white' }} >Calculator</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'blue' }}>
        <Text></Text></View>
      <View style={{ flex: 3, backgroundColor: 'lightblue' }}></View>
      <View style={{ flex: 10, backgroundColor: 'lightgreen', flexDirection: 'row' }}>
        <View style={{ flex: 3 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 1") }}>
              <Text style={{ fontSize: 30 }}>1</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 2") }}>
              <Text style={{ fontSize: 30 }}>2</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 3") }}>
              <Text style={{ fontSize: 30 }}>3</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 4") }}>
              <Text style={{ fontSize: 30 }}>4</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 5") }}>
              <Text style={{ fontSize: 30 }}>5</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 6") }}>
              <Text style={{ fontSize: 30 }}>6</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 7") }}>
              <Text style={{ fontSize: 30 }}>7</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 8") }}>
              <Text style={{ fontSize: 30 }}>8</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 9") }}>
              <Text style={{ fontSize: 30 }}>9</Text>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed AC") }}>
              <Text style={{ fontSize: 30 }}>AC</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,250,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed 0") }}>
              <Text style={{ fontSize: 30 }}>0</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(250,250,0,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed +") }}>
            <Text style={{ fontSize: 30 }}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(250,250,0,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed -") }}>
            <Text style={{ fontSize: 30 }}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(250,250,0,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed *") }}>
            <Text style={{ fontSize: 30 }}>*</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(250,250,0,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed /") }}>
            <Text style={{ fontSize: 30 }}>/</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="white" style={{ backgroundColor: 'rgba(0,0,0,0.4)', flex: 1, alignItems: 'flex-end', justifyContent: 'center', alignItems: 'center' }} onPress={() => { Alert.alert("You Pressed =") }}>
            <Text style={{ fontSize: 30 }}>=</Text>
          </TouchableHighlight>

        </View>
      </View>
    </View>

    );
  }
}
