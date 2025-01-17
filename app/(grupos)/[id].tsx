import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const listagemGrupos = () => {
    const item = useLocalSearchParams();
    // Verificar se os dados foram enviados.
    // console.log("item enviados para listagem de Grupos", item)

  return (
    <View>
      <Text>Listagem dos grupos: {item.id}</Text>
    </View>
  )
}

export default listagemGrupos

const styles = StyleSheet.create({})