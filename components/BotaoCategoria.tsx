import { ScrollView, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constants/Colors'
import categorias from '@/data/ListaCategorias'
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props ={
  capturarMudancaCategoria: (categoria: string) => void;
}

const BotaoCategoria = ({capturarMudancaCategoria}: Props) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selecionarCategoria = (index: number)=>{
    const selected = itemRef.current[index]
    // console.log('Número da categória:', index);
    setActiveIndex(index);
    
    selected?.measure((tmh)=>{
      scrollRef.current?.scrollTo({x:tmh,y:0,animated:true})
    });

    capturarMudancaCategoria(categorias[index].titulo)

  }

  return (
    <View>
      <Text style={styles.titulo}>Categorias</Text>
      <ScrollView 
        horizontal 
        ref={scrollRef} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,
      }}>
        {categorias.map((item, index)=>{
            return <TouchableOpacity 
                      key={index} 
                      ref={(elemento)=>itemRef.current[index] = elemento} 
                      onPress={()=>selecionarCategoria(index)}
                      style={activeIndex === index ? styles.categoriabtnAtivado : styles.categoriabtn}>
                <MaterialCommunityIcons 
                  name={item.iconName as any} 
                  size={20} 
                  color={activeIndex === index ? Colors.Branco : Colors.Preto}/>
                <Text style={ activeIndex === index ? styles.textoAtivo : styles.texto}>
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
      color: Colors.Preto,
    },
    categoriabtn:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.Branco,
      width: 100,
      height: 40,
      borderRadius: 10,
      shadowColor: '#333333',
      shadowOffset: {width: 1, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    categoriabtnAtivado:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.Verde,
      width: 100,
      height: 40,
      borderRadius: 10,
      shadowColor: '#333333',
      shadowOffset: {width: 1, height: 2},
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    texto:{
      marginLeft: 4,
      color: Colors.Preto,

    },
    textoAtivo:{
      marginLeft: 4,
      color: Colors.Branco
    }
})