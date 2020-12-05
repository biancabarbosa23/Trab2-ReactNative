import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'

function ListItem({ data, navigation }) {

  async function handleDeactivation() {
    try {
      Alert.alert('Alerta', 'Deseja mesmo excluir esse usuário?', [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: async () => {
            const response = await api.delete(`/todo/${data._id}`)
          },
        },
      ])
    } catch (response) {
      Alert.alert(responde.data.error)
    }
  }

  const handleNavigationUpdate = async (todo)=>{
    await AsyncStorage.setItem('id', todo._id)
    navigation.navigate('alter')
  }

  function rightActions() {
    return (
      <View>
          <TouchableOpacity
            style={styles.buttonDesativar}
            onPress={handleDeactivation}
          >
            <Text style={styles.textButton}>Excluir</Text>
          </TouchableOpacity>
      </View>
    )
  }

  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableOpacity
        style={styles.container}
        onPress={()=>handleNavigationUpdate(data)}
      >

        <View style={styles.divInfo}>
          <Text style={styles.text}>Titulo: {data.titulo}</Text>
          <Text style={styles.text}>tipo: {data.tipo}</Text>
          <Text style={styles.text}>Materia: {data.materia}</Text>
          <Text style={styles.text}>Data de entrega: {data.data}</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 2,
    marginHorizontal: 8,
  },
  text: {
    fontSize: 17,
  },
  textDesativado: {
    fontSize: 17,
    color: '#ff0000',
  },
  divInfo: {
    flex: 1,
    width: '70%',
    justifyContent: 'center',
  },
  buttonDesativar: {
    backgroundColor: '#ff0000',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
  },
})

export default ListItem