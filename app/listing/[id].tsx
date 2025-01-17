import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { listaTipos } from '@/types/listaTipos';
import destinos from '@/data/destinos.json'
import { Feather } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

// Capturar larguda da tela do dispositivo.
const largura = Dimensions.get('screen').width;

const DetalhesDestino = () => {
    

    // Capturar paramentros enviados para a página
    const {id} = useLocalSearchParams();

    // Recupera os dados da lista a partir do ID.
    const lista:listaTipos = (destinos as listaTipos[]).find(
        (item) => item.id == id
    );

    const route = useRouter()

    // Console log para verificar se os dados estão sendo enviados
    console.log("Imagem enviada: ",lista.image);

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () =>(
                        <TouchableOpacity onPress={()=>route.back()} style={styles.btnBG}>
                            <View style={styles.containerBg}>
                                <Feather name='arrow-left' size={28} />
                            </View>
                        </TouchableOpacity>
                    )
            }}/>
            <View>
                <Image source={{uri: lista.image}} style={styles.img}/>
            </View>
        </>
    )
}

export default DetalhesDestino

const styles = StyleSheet.create({
    img:{
        width: largura,
        height: 300,
        
    },
    containerBg:{
        backgroundColor: Colors.Branco,
        padding: 6,
        borderRadius: 10

    },
    btnBG:{
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 10,
        padding: 4
        
    }
})