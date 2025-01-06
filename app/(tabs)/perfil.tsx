import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const perfil = () => {
  return (
    <View style={styles.container}>
      <Text>perfil</Text>
    </View>
  )
}

export default perfil

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})