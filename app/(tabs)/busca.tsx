import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const busca = () => {
  return (
    <View style={styles.container}>
      <Text>busca</Text>
    </View>
  )
}

export default busca

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})