import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import { primaryGradientArray } from './utils/Colors'
import Header from './components/Header'
import Input from './components/Input'
const headerTitle = 'To Do List'

export default class Main extends React.Component {
  state = {
    inputValue: ''
  }
  newInputValue = value => {
    this.setState({
      inputValue: value
    })
  }

  render() {
    const { inputValue } = this.state
    return (
      <LinearGradient colors={primaryGradientArray} style={styles.container}>
        <View style={styles.centered}>
          <Header title={headerTitle} />
        </View>
        <View style={styles.inputContainer}>
          <Input inputValue={inputValue} onChangeText={this.newInputValue} />
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
