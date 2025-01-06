import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const favoritos = () => {
  return (
    <View style={styles.container}>
      <Text>favoritos</Text>
    </View>
  )
}

export default favoritos

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})