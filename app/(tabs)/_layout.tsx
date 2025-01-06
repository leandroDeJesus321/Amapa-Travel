import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarStyle:{
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        shadowColor: 'white',
        padding: 0,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: '#999', 
    }}>
      <Tabs.Screen name='index'
      options={{tabBarIcon:({color})=>{
        return <Ionicons name='compass' size={24} color={color}/>
      }}}/>
      <Tabs.Screen name='categoria'options={{tabBarIcon:({color})=>{
        return <MaterialIcons name='space-dashboard' size={24} color={color}/>
      }}}/>
      <Tabs.Screen name='busca'options={{tabBarIcon:({color})=>{
         return <View style={styles.icones}>
          <Ionicons name='search-outline' size={24} color={Colors.white} />
        </View>
      }}}/>
      <Tabs.Screen name='favoritos' options={{tabBarIcon:({color})=>{
        return <Ionicons name='bookmark' size={24} color={color}/>
      }}}/>
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({
  icones:{
    backgroundColor: Colors.Verde,
    width: 36,
    height: 32,
    margin: 'auto',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 6
  }
})