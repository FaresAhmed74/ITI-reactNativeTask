import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default function Home({ navigation }) {

  const pressHandler = (t) => {
    //navigation.navigate('ReviewDetails');
    navigation.push(t);
  }

  return (
    <View style={styles.container} >
      <Text style={styles.header}>My React-Native Tasks</Text>
      <Button title='Task1' onPress={()=>pressHandler('Task1')}/>
      <Button title='Task2' onPress={()=>pressHandler('Task2')} />
      <Button title='Task3' onPress={()=>pressHandler('Task3')} />
      <Button title='Task4' onPress={()=>pressHandler('Task4')} />
   



    </View>
  );
}

const styles=StyleSheet.create({
   container:{
    backgroundColor: '#f08080',
    height:"100%",
    alignItems: 'center',
    justifyContent:'center'
   },
   
    header: {
        marginTop:10,
        // flex: 1,
      
        paddingHorizontal:15,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold', 
      },
      
})