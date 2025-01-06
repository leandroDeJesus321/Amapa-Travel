import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import categorias from '@/data/ListaCategorias'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const BotaoCategoria = () => {
  return (
    <View>
      <Text style={styles.titulo}>Categorias</Text>
      <ScrollView horizontal contentContainerStyle={{
        gap: 20,
        paddingVertical: 10,
        marginBottom: 10,
      }}>
        {categorias.map((item, index)=>{
            return <TouchableOpacity style={styles.categoriabtn}>
                <MaterialCommunityIcons name={item.iconName as any} size={20} color={Colors.black}/>
                <Text>
                    {item.titulo}
                </Text>
            </TouchableOpacity>
        })}
      </ScrollView>
    </View>
  )
}

export default BotaoCategoria

const styles = StyleSheet.create({
    titulo:{
        fontSize: 22,
        fontWeight: '700',
        color: Colors.black,
    },
    categoriabtn:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        width: 100,
        height: 40,
        borderRadius: 10,
        shadowColor: '#333333',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 3,
    }
})