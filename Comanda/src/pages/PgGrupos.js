import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';


export default class PgGrupos extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://192.168.11.9:8000/grupo/list')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

   remove(id) {
    return fetch(`http://192.168.11.9:8000/grupo/delete/${id}`, {method: 'DELETE'})
    .then((response)=> response.json()).then((reponseJson)=>{
      Alert.alert("Dados Deletados")
    })
      .catch(err => console.error(err))
  };


  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Button
          title=" Adicionar Grupo"
          onPress={() => this.props.navigation.navigate('FormGrupo')}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <View style={styles.item}>
            <Text style={styles.name}>
              {item.descricao}
            </Text>
            <Button
              title="Editar"
              onPress={() => this.props.navigation.navigate('FormGrupo')}
            />
            <Button
              title="Excluir"
              onPress={()=>this.remove(item.id)}
            />
          </View>}

          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}

PgGrupos.navigationOptions = {
  title: "Grupos"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    //alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 22
  },
  email: {
    color: 'red'
  }
});
