// import React from 'react';
// import { View, Text, Image, ScrollView, TextInput } from 'react-native';


// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// }

// export default App;


// import React from "react";
// import {View,Text,StyleSheet} from 'react-native';

// const Application=()=>{
// return (
//   <View style={styles.container}>
//     <Text>hallo WORLD</Text>
//   </View>
// );
// };

// const styles= StyleSheet.create({
//   container:{
//     flex: 1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
// });

// export default Application;




import React from "react";
import {View,Text,StyleSheet} from 'react-native';
import Animals from "./Components/Animals";


class Application extends React.Component{
  constructor(props){
    super();
  }
  render(){
    return(
      <View style={styles.continer}>
      <Animals/>
      <Animals/>
      <Animals/>
      <Animals/>
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

export default Application;




// import React from 'react';
// import {View,Text, StyleSheet} from 'react-native';

// export default  class Application extends React.Component{
//   constructor(props){
//     super();
//   }
//   render(){
//     return(
//       <View style={styles.container}>
//         <Text style={styles.text}>hallo word</Text>
//       </View>
//     );
//   }
// }
// const styles = StyleSheet.create({

//   container:{
//     flex: 10,
//     justifyContent: 'center',
//     alignItems:'center'
//   },
//   text:{
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
// });

