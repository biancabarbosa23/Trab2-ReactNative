import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'


export default function HHome({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.divButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('register')}
        >
          <Text style={styles.btnText}>Cadastrar nova tarefa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('list')}
        >
          <Text style={styles.btnText}>Listar tarefas</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSair: {
    marginTop: 30,
    backgroundColor: '#FF0000',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  button: {
    marginTop: 15,
    backgroundColor: '#2BAE66FF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
})