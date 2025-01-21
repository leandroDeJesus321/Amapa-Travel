import { Dimensions, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { listaTipos } from '@/types/listaTipos';
import destinos from '@/data/destinos.json'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
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

    const router = useRouter()

    // Console log para verificar se os dados estão sendo enviados
    // console.log("Imagem enviada: ",lista.image);

    return (
        <>
            {/* Corpo do HTML abaixo da imagem */}
            <View>
                <Image source={{uri: lista.image}} style={styles.img}/>
                <ScrollView style={styles.secaoDescricao}>
                    <Text style={styles.titulo}>
                        {lista.name}
                    </Text>
                    <View style={styles.containerLocalizacao}>
                        <FontAwesome5 name="map-marker-alt" size={18} color={Colors.Verde}/>
                        <Text>{lista.localidade}</Text>
                    </View>

                    {/* Avaliação do Local */}
                    <View style={styles.iconContainer}>
                        <Ionicons name='star' size={18} color={Colors.Verde} />
                        <View style={styles.icone}>
                            <Text style={styles.titulo2}>{lista.avalicao}</Text>
                            <Text>{lista.avaliador}</Text>
                        </View>
                        <View style={styles.icone}>
                            <Text style={styles.titulo2}>Categoria</Text>
                            <Text>{lista.categoria}</Text>
                        </View>
                    </View>
                    <View style={styles.containerTexto}>
                        <Text>
                            {lista.descricao}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={()=>Linking.openURL(lista.local)} style={styles.btn}>
                        <Text style={{color: Colors.Branco, fontWeight: '600', fontSize: 18}}>
                            Localização
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
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
        backgroundColor: "rgb(255,255,255)",
        borderRadius: 10,
        padding: 4,
        
    },
    secaoDescricao:{
        marginHorizontal: 'auto',
        
    },
    titulo:{
        fontSize: 20,
        fontWeight: '600',
        marginHorizontal: 'auto'
        
    },
    titulo2:{
        fontSize: 14,
        fontWeight: '600',
        
    },
    containerTexto:{
        width: 300,
        marginHorizontal: 'auto',
        backgroundColor: 'rgba(230,230,230,0.8)',
        padding: 10,
        borderRadius: 10
        
    },
    containerLocalizacao:{
        flexDirection: 'row',
        gap: 10

    },
    iconContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginVertical: 10

    },
    icone:{
        backgroundColor: 'rgba(230,230,230,0.8)',
        padding: 10,

    },
    btn:{
        backgroundColor: Colors.Verde,
        alignItems: 'center',
        padding: 18,
        borderRadius: 5,
        width: '50%',
        marginVertical: 5,
        marginHorizontal: 'auto'

    }
})