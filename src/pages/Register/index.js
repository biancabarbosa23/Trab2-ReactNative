import React,{useState} from "react";
import { Alert } from 'react-native'

import api from '../../services/api'
import Formulario from '../../component/Formulario'

export default function Register({navigation}){
    const [titulo, setTitulo] = useState('')
    const [tipo, setTipo] = useState('')
    const [materia, setMateria] = useState('')
    const [data, setData] = useState('')
    const [descricao, setDescricao] = useState('')

    const handleSubmit = async ()=>{
      try{
        const response = await api.post('/todo',{
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
