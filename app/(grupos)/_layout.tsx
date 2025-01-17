import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { StatusBar } from 'react-native';

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="[id]" options={{ 
                        title: 'Listagem', 
                        headerShown: true, 
                        headerRight: ()=> <Image source={{uri:'https://th.bing.com/th/id/OIP.P8iFoKX9JoMyTDV8Q0n5OgEqDR?rs=1&pid=ImgDetMain'}}
                        style={{width:50, height: 35, borderRadius: 5}}/>
                        }}/>
      </Stack>
      <StatusBar backgroundColor="#161622" style='Light'/>
    </>
  )
}

export default _layout

const styles = StyleSheet.create({})