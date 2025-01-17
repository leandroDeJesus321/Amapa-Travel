import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { StatusBar } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.

function RootLayout() {

  return (
      <>
      <Stack>
        <Stack.Screen name="[id]" 
                      options={{
                        title: "Pontos turisticos",
                        headerShown: true, headerRight: () => <Image source={{uri:'https://th.bing.com/th/id/OIP.P8iFoKX9JoMyTDV8Q0n5OgEqDR?rs=1&pid=ImgDetMain'}}
                        style={{width:50, height: 35, borderRadius: 5}}/> }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style='Light'/>
      </>
  );
}

export default RootLayout;

const styles = StyleSheet.create({})