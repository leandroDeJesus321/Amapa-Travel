import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import {useHeaderHeight} from '@react-navigation/elements';
import BotaoCategoria from '@/components/BotaoCategoria';
import Listas from '@/components/Listas';
import destinos from "../../data/destinos.json"
import ListaGrupos from '@/components/ListaGrupos';
import grupos from '../../data/grupos.json'

const index = () => {
  const alturaTela = useHeaderHeight();

  const [categoria, setCategoria] = useState('ALL')


  const capturarMudancaCategoria = (categoria: string) =>{
    // console.log('Verificar se captura de categoria está funcionando: ', categoria);
    setCategoria(categoria);
  }

  // Corpo principal do HTML
  return (
    <>
    {/* Cabeçalho da página incial */}
    <Stack.Screen options={{headerTransparent: true, headerTitle: "", headerLeft: ()=>{
      return <TouchableOpacity onPress={() => { } } style={{marginLeft: 20}}>
        {/* Imagem de tela da bandeira do Amapá à esquerda*/}
        <Image source={{
          uri: 'https://th.bing.com/th/id/OIP.P8iFoKX9JoMyTDV8Q0n5OgEqDR?rs=1&pid=ImgDetMain'}}
          style={{width:50, height: 35, borderRadius: 5}} />
        </TouchableOpacity>
      },
      // Icone de notificações
      headerRight: ()=>{
        return <TouchableOpacity onPress={() => { } } style={styles.notificacao}>
          <Ionicons name='notifications' size={20} color={Colors.Preto} />
        </TouchableOpacity>
      }
    }}/>

    {/* Corpo abaixo da barra de notificação do página inicial */}
    <View style={[styles.container, {paddingTop: alturaTela}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.texto}>
          Explore as belezas do Amapá
        </Text>

        {/* Inicio - Barra de pesquisa */}
        <View style={styles.containerPesquisa}>
          <View style={styles.barraPesquisa}>
            <Ionicons name='search' size={18}/>
            <TextInput placeholder='Pesquisar...' style={{height: '100%', width: '100%'}}/>
          </View>
          <TouchableOpacity onPress={()=>{}} style={styles.filtroBtn}>
              <Ionicons name="options" size={28} color={Colors.Branco}/>
          </TouchableOpacity>
        </View>
        {/* Fim - Barra de pesquisa */}

        {/* Lista horizontal de botões de categoria */}
        <BotaoCategoria capturarMudancaCategoria={capturarMudancaCategoria}/>

        {/* Lista de cards de pontos turisticos */}
        <Listas listings={destinos} category={categoria}/>

        {/* Listade grupos de categorias - usado para agrupar pontos turisticos por município */}
        <ListaGrupos listings={grupos}/>
      </ScrollView>
    </View>
  </>
  )
}

export default index

const styles = StyleSheet.create({
    container:{
      flex: 1,
      paddingHorizontal: 20,
      backgroundColor: Colors.bgColor,
    },
    texto:{
      fontSize: 28,
      fontWeight:'800',
      color: Colors.Preto,
      marginTop: 10
    },
    notificacao:{
      marginRight: 20, 
      backgroundColor: Colors.Branco, 
      padding: 10, 
      borderRadius: 10,
      shadowColor: "#171717",
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    containerPesquisa:{
      flexDirection: 'row',
      marginVertical: 20,
      alignItems:'center', 
      gap: 10,
    },
    barraPesquisa:{
      width: '82%',
      overflow: 'hidden',
      height: 55,
      paddingHorizontal: 4,
      borderRadius: 5,
      gap:1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.Branco,
    },
    filtroBtn:{
      backgroundColor: Colors.Verde,
      padding: 12,
      borderRadius: 10,
    }
})