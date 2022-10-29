import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

export default  class Application extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>hallo word</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container:{
    flex: 10,
    justifyContent: 'center',
    alignItems:'center'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  },
});

