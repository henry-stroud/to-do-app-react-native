import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import { primaryGradientArray } from './utils/Colors'
import Header from './components/Header';
const headerTitle = 'To Do List';

export default class Main extends React.Component {
  render() {
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <View style={styles.centered}>
          <Header title={headerTitle} />
        </View>
      </LinearGradient>
    )
  }
}
const styles = StyleSheet.create({
  centered: {
    alignItems: 'center'
  },
  container: {
    flex: 1
  }

})
