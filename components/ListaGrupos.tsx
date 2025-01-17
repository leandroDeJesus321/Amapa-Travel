import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { grupoTipos } from '@/types/grupoTipos'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

// Lista dos grupos com os locais
const ListaGrupos = ({listings}:{listings: grupoTipos}) => {

  const navegar= (item)=>{
    router.push({pathname: `/(grupos)/${item.id}`, params: item})
    
  }

  // Função auxiliar para renderizar os itens da lista de grupos.
  const renderizarLista: ListRenderItem<grupoTipos> = ({item}) =>{
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>{navegar(item)}}>
          <Image source={{uri: item.image}} style={styles.img}/>
          <View>
            <Text style={styles.texto}>{item.municipio}</Text>
            
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  // Corpo Principal da lista de grupos com flatlist
  return (
    <View style={styles.main}>
      <Text style={styles.titulo}>Grupos de pontos turisticos</Text>
      <FlatList
        data={listings}
        renderItem={renderizarLista}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default ListaGrupos

const styles = StyleSheet.create({
  main:{
    marginVertical: 20
  },
  img:{
    resizeMode: 'contain',
    width: 300,
    height: 200,
    
  },
  container:{
    backgroundColor: Colors.Branco,
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  titulo:{
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 10
  },
  texto:{
    fontSize: 16,
    fontWeight: '600',

  }
})