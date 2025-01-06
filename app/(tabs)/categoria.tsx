import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const categoria = () => {
  return (
    <View style={styles.container}>
      <Text>categoria</Text>
    </View>
  )
}

export default categoria

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})