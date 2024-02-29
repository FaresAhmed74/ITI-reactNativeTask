import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Box from '../components/Box';
import { TextInput } from 'react-native-gesture-handler';
export default function Task1({ navigation }) {

    const myColors=[
        {colorName:"Cyan",hexCode:"#2aa198"},
        {colorName:"Blue",hexCode:"#268bd2"},
        {colorName:"Magenta",hexCode:"#2aa198"},
        {colorName:"Orange",hexCode:"#cb4b16"}
    
      ]
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View >
     <View style={styles.container}>
      
     <Text style={{fontWeight:'bold',fontSize:17}}>Here are some boxes of different colors</Text>
      {myColors.map((color,index)=>(
        <Box colorName={color.colorName} hexCode={color.hexCode} key={index}></Box>
      ))}
      </View>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
    container: {
      marginTop:50,
      // flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:15,
  
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 50,
    },
 
  });
  