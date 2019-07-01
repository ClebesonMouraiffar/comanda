import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class PgCadastros extends Component {
  render()  { 
    return (
      <View style={styles.container}>
        <Text/>
        <Button
          title=" Grupos"
          onPress={() => this.props.navigation.navigate('Grupos')}
          style={styles.item}
        />
        <Text/>
        <Button
          title=" Itens"
          onPress={() => this.props.navigation.navigate('Itens')}
          style={styles.item}
        />
        <Text/>
        <Button
          title=" Mesas"
          onPress={() => this.props.navigation.navigate('Mesas')}
          style={styles.item}
        />
      </View>
    );
  }
}

PgCadastros.navigationOptions = {
  title: "Cadastros"
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
});
