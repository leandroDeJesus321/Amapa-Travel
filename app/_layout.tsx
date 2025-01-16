import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { StatusBar } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.

function RootLayout() {

  return (
      <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="listing" options={{ headerShown: false }} /> */}
      </Stack>
      <StatusBar backgroundColor="#161622" style='Light'/>
      </>
  );
}

export default RootLayout;

const styles = StyleSheet.create({})