import React,{useState, useEffect} from "react";

import {
  Alert,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage'

import api from '../../services/api'
import Formulario from '../../component/Formulario'

export default function Alter({navigation}){
    const [titulo, setTitulo] = useState('')
    const [tipo, setTipo] = useState('')
    const [materia, setMateria] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(()=>{
        handleChangeData()
    },[])

    const handleChangeData = async ()=>{
      try{
        const id = await AsyncStorage.getItem('id')
        const response = await api.get(`/todo/${id}`)

        const {titulo, tipo, materia, data, descricao} = response.data

        setTitulo(titulo)
        setTipo(tipo)
        setMateria(materia)
        const date = data.split("T")
        setData(date[0])
        setDescricao(descricao)

      }catch(response){
        Alert.alert(response.data.error)
      }
        
    }

    const handleSubmit = async ()=>{
      try{
        const id = await AsyncStorage.getItem('id')
        const response = await api.put(`/todo/${id}`,{
          titulo,
          tipo,
          materia,
          data,
          descricao
        })

        Alert.alert(response.data.message)
      }catch(response){
        Alert.alert(response.data.error)
      }
    }

  return (
    <Formulario 
    titulo={titulo}
    setTitulo={setTitulo}
    tipo={tipo}
    setTipo={setTipo}
    materia={materia}
    setMateria={setMateria}
    data={data}
    setData={setData}
    descricao={descricao}
    setDescricao={setDescricao}
    handleSubmit={handleSubmit}
    navigation={navigation}
    />
  )
}