import React from 'react';
import { Alert } from 'react-native';
import { StyleSheet,ScrollView, SafeAreaView,Image, SectionList,View, Text, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import { SectionList } from 'react-native-web';

export default function Task3({ navigation }) {


      const sections = [
        {
          id: "0",
          title: "A",
          data: [
            { id: "0", text: "Ayman",img:require('../assets/person.png')},
            { id: "1", text: "Ahmed",img:require('../assets/10.png') },
            { id: "2", text: "Arwa",img:require('../assets/model.png') },
          ],
        },
        {
          id: "1",
          title: "B",
          data: [
            { id: "3", text: "Body",img:require('../assets/person.png') },
            { id: "4", text: "Bebo", img:require('../assets/10.png')},
          ],
        },
        {
          id: "2",
          title: "C",
          data: [
            { id: "5", text: "Caro",img:require('../assets/model.png') },
            { id: "6", text: "Citty",img:require('../assets/person.png') },
          ],
        },
      ];
      
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <SectionList sections={sections} 
      renderItem={({item})=><Text style={styles.itemStyle}><View style={styles.iconContainer}><Image source={item.img} style={styles.icon}></Image></View>{item.text}</Text>}
      renderSectionHeader={({section})=><Text style={styles.headerStyle}>{section.title}</Text>}
      >
      </SectionList>
    </SafeAreaView>
    <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#0F4C75',
    // paddingTop: 20,
    justifyContent:'center',
    // paddingTop:30,
  },
  itemStyle:{
    backgroundColor:"skyblue",
    padding:5,
    marginBottom:5,
    
  },
  headerStyle:{
    backgroundColor:"steelblue",
    padding:15,
    marginBottom:8,
    color:"white",
    fontWeight:"900",
    fontSize:20,
    textAlign:'center'
  },
  icon:{
    width:40,
    height:40,
    
    justifyContent:'center',
    alignItems:'center'
  },
  iconContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});