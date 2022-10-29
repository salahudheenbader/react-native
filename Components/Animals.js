import React from "react";
import {View,Text,StyleSheet} from 'react-native';


class Animal extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <View style={styles.continer}>
        <Text>Animal</Text>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  continer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

})

export default Animal;