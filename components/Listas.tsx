import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { listaTipos } from '@/types/listaTipos'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'


// Propriedade para validar qual dado ira receber.
type Props = {
  listings: any[];
  category: string;
}


const Listas = ({listings, category}: Props) => {
  const [carregando, setCarregando] = useState(false);

  useEffect(()=>{
    // console.log("Atualizando lista");
    setCarregando(true);

    setTimeout(()=>{
      setCarregando(false);
    }, 200);

  }, [category])

  const carregarItens: ListRenderItem<listaTipos> = ({item}) =>{
    
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item} >
            <Image source={{uri: item.image}} style={styles.img}/>

            {/* Área de favorito */}
            <View style={styles.bookmark}>
              <Ionicons name='bookmark-outline' size={20} color={Colors.Branco} />
            </View>

            {/* Nome do ponto turistico */}
            <Text style={styles.texto} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>

            {/* Área de localização */}
            <View>
              <View>
                <FontAwesome5 name="map-marker-alt" size={18} color={Colors.Verde}/>
                <Text style={styles.textoLocalizacao} numberOfLines={1} ellipsizeMode='tail' >{item.localidade}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    )
  }

  // Console log para verificar se os dados estão sendo entregues
  // console.log(listings)
  
  return (
    <View>
      <FlatList
        data={carregando ? [] : listings}
        renderItem={carregarItens}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default Listas

const styles = StyleSheet.create({
  img:{
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 30,

  },
  item:{
    backgroundColor: Colors.Branco,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 275,
    
  },
  bookmark:{
    position: 'absolute',
    top: 185,
    right: 30,
    backgroundColor: Colors.Verde,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'white'

  },
  texto:{
    fontSize: 16,
    fontWeight: '600',
    color: Colors.Preto,
    marginBottom: 10

  },
  textoLocalizacao:{
    fontSize: 12

  }
})

