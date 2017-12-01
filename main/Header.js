import React from 'react';
import {StyleSheet, Text,View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Hello,Every One :)</Text>      
       </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
