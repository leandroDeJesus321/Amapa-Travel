import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router';
import 'react-native-reanimated';
import { StatusBar } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.

function RootLayout() {
  
  
  return (
      <>
      <Stack>
        <Stack.Screen name="[id]" 
                      options={{
                        title: "",
                        headerTransparent: true,
                        headerShown: true,
                        headerTintColor: Colors.Branco,
                        headerRight: () => 
                          <TouchableOpacity onPress={()=>console.log("Funcionando!")} style={styles.btnBG}>
                            <View style={styles.containerBg}>
                              <Ionicons name='bookmark-outline' size={24} color={Colors.Branco}/>
                            </View>
                          </TouchableOpacity>
                          }} />
        </Stack>
      <StatusBar backgroundColor="#161622" style='Light'/>
      </>
  );
}

export default RootLayout;

const styles = StyleSheet.create({
  containerBg:{
    backgroundColor: Colors.Verde,
    padding: 6,
    borderRadius: 10

},
  btnBG:{
    backgroundColor: Colors.Verde,
    borderRadius: 10,
    padding: 4
    
}
})