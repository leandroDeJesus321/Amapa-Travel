import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const DetalhesDestino = () => {
    const {id} = useLocalSearchParams();

    return (
        <View>
        <Text>Detalhes da Lista: {id}</Text>
        </View>
    )
}

export default DetalhesDestino

const styles = StyleSheet.create({})