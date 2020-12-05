import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import SelectInput from "react-native-select-input-ios";
import DatePicker from "react-native-datepicker";

const options = [
  { value: "trabalho", label: "Trabalho" },
  { value: "prova", label: "Prova" },
  { value: "atividade", label: "Atividade" },
];

export default function Formulario({
    titulo,
    setTitulo,
    tipo,
    setTipo,
    materia,
    setMateria,
    data,
    setData,
    descricao,
    setDescricao,
    handleSubmit,
    navigation
}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.form}>
        <TextInput
            value={titulo}
          placeholder="Nome"
          style={styles.input}
          onChangeText={(value) => setTitulo(value)}
        />
        <SelectInput
            value={tipo}
            options={options}
            style={styles.input}
            onValueChange={(value)=> setTipo(value)}
        />
        <TextInput
        value={materia}
          placeholder="Materia"
          style={styles.input}
          onChangeText={(value) => setMateria(value)}
        />
        <TextInput
            value={descricao}
          placeholder="Descrição"
          style={styles.input}
          onChangeText={(value) => setDescricao(value)}
        />
        <DatePicker
          style={styles.datePickerStyle}
          date={data} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="Selecione a data"
          format="YYYY-MM-DD"
          minDate="01-01-2020"
          maxDate="01-01-2023"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setData(date);
          }}
        />
        <TouchableOpacity style={styles.btnCadastrar} onPress={handleSubmit}>
          <Text style={styles.btnTextCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.navigate('home')}>
          <Text style={styles.btnTextVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 1,
    backgroundColor: "#1C1C1C",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#ddd",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 20,
    borderRadius: 7,
    padding: 15,
  },
  select: {
    backgroundColor: "#ddd",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    borderRadius: 7,
  },
  btnCadastrar: {
    marginTop: 15,
    backgroundColor: "#2BAE66FF",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  btnTextCadastrar: {
    color: "#fff",
    fontSize: 20,
  },
  btnVoltar: {
    marginTop: 15,
    backgroundColor: "#FF0000",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginBottom: 10,
  },
  btnTextVoltar: {
    color: "#fff",
    fontSize: 20,
  },
  datePickerStyle: {
    color: "#fff",
    width: 200,
    marginTop: 15,
    marginBottom: 15,
  },
});
