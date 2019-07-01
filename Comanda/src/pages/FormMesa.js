import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import { withFormik } from 'formik';

const Form = (props) => (
  <View style={styles.container}>
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
      fetch('http://10.1.1.23:8000/mesa/add', {
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
});