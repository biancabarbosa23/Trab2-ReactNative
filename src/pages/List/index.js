import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
} from 'react-native'

import api from '../../services/api'

import ListItem from '../../component/ListIem'


function UsersList({ navigation }) {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    handleDataUserList()
  },[todo])

  async function handleDataUserList() {
    try {
      const response = await api.get('/todos') 
      setTodo(response.data)
    } catch (response) {
      Alert.alert(response.data.error)
    }
  }

  return (
    <View style={styles.screen}>
     
      <Text style={styles.textInformativo}>
        Arraste para a esquerda para excluir
      </Text>
      <View style={styles.divList}>
        <FlatList
          data={todo}
          key={(item) => item._id}
          renderItem={({ item }) => (
            <ListItem data={item} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => (
            <View backgroundColor="#181818" height={2} />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  textInformativo: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 5,
    alignSelf: 'center',
    color: '#fff',
  },
  header: {
    marginTop: 10,
    maxHeight: 120,
  },
  buttonBack: {
    position: 'absolute',
    left: 1,
    top: 23,
    marginLeft: 10,
    width: 40,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divList: {
    flex: 1,
    width: '100%',
  },
})

export default UsersList