import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Picker, FlatList } from 'react-native';

import { withFormik } from 'formik';



const Form = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>NOME</Text>
    <TextInput
      style={styles.item}
      value={props.values.nome}
      onChangeText={text => props.setFieldValue('nome', text)}
    />
    <Text style={styles.title}>DESCRIÇÃO</Text>
    <TextInput
      style={styles.item}
      value={props.values.descricao}
      onChangeText={text => props.setFieldValue('descricao', text)}
    />
    <Text style={styles.title}>VALOR</Text>
    <TextInput
      style={styles.item}
      value={props.values.valor}
      onChangeText={text => props.setFieldValue('valor', text)}
    />
    <Text style={styles.title}>GRUPO</Text>
    
    <Picker
      // selectedValue={this.state.language}
      style={styles.item}
    //onValueChange={(itemValue, itemIndex) =>
    //this.setState({ language: itemValue })
    //}
    >
      
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
    <Button
      style={styles.item}
      onPress={props.handleSubmit}
      title="Salvar"
    />
  </View>
);

export default withFormik({
  mapPropsToValues: () => ({ descricao: '' }),

  handleSubmit: (values, { setSubmitting, setErrors }) => {
    console.log(values),
      fetch('http://10.1.1.23:8000/item/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => response.json()).then((reponseJson) => {
        Alert.alert("Dados Inseridos com Sucesso")
      })
  }
})(Form);

withFormik.navigationOptions = {
  title: "Adicionar Grupo"
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  item: {
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  title: {
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'Verdana',
    fontSize: 18
  },
});