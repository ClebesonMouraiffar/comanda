import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import { withFormik } from 'formik';

const Form = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>DESCRIÇÃO</Text>
    <TextInput
      style={styles.item}
      value={props.values.descricao}
      onChangeText={text => props.setFieldValue('descricao', text)}
    />

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
      fetch('http://192.168.11.9:8000/mesa/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((response) => response.json()).then((reponseJson) => {
        //this.props.navigation.push('Mesas')
        Alert.alert("Dados Inseridos com Sucesso")
      })
  }
})(Form);

withFormik.navigationOptions = {
  title: "Adicionar Mesa"
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