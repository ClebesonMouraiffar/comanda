import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, Button } from 'react-native';

export default class PgHome extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://192.168.11.9:8000/comanda/list')
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
          title=" Nova Comanda"
          onPress={() => this.props.navigation.navigate('Nova Comanda',(item.id))}
        />
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => <View style={styles.item}>
            <Text style={styles.name}>
              {item.mesa.descricao}
            </Text>
            <Text style={styles.value}>
              Total: R$ {item.total}
            </Text>
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
  name: {
    fontFamily: 'Verdana',
    fontSize: 22
  },
  value: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: 'red'
  },
});

PgHome.navigationOptions = {
  title: "Home"
};