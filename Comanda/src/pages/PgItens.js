import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button} from 'react-native';


export default class PgItens extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

componentDidMount() {
  return fetch('http://10.1.1.23:8000/item/list')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson,
      });

    })
    .catch((error) => {
      console.error(error);
    });
}

 remove(id) {
  return fetch(`http://10.1.1.23:8000/item/delete/${id}`, {method: 'DELETE'})
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
        title=" Adicionar Item"
        onPress={() => this.props.navigation.navigate('FormItem')}
      />
      <FlatList
        data={this.state.dataSource}
        renderItem={({ item }) => <View style={styles.item}>
          <Text style={styles.name}>
            Nome: {item.name}
          </Text>
          <Text style={styles.value}>
            Valor: R$ {item.valor}
          </Text>
          <Text style={styles.name2}>
            Grupo: {item.grupo.descricao}
          </Text>
          <Text style={styles.name3}>
            Descrição: {item.descricao}
          </Text>
          <Button
            title="Editar"
            onPress={() => this.props.navigation.navigate('FormMesa',(item.id))}
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
name2: {
  fontFamily: 'Verdana',
  fontSize: 17
},
name3: {
  fontFamily: 'Verdana',
  fontSize: 14
},
value: {
  fontFamily: 'Verdana',
  fontSize: 18,
  color: 'red'
},
email: {
  color: 'red'
}
});


PgItens.navigationOptions = {
  title: "Itens"
};