import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, ScrollView,Text, View,Image, TextInput } from 'react-native';
import Navigator from './routes/homeStack';
// import UsersContextProvider from './context/usersContextProvider';

export default function App() {
  
  return (  
    // <UsersContextProvider>

      <Navigator />
    // </UsersContextProvider>
    
  );
}

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
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  photo: {
    width: 340,
    height: 500,
    marginRight: 20,
    borderRadius: 5,
  },
});
