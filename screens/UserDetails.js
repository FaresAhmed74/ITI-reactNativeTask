import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, Button } from 'react-native';
// import { usersContext } from '../context/usersContextProvider';

export default function UserDetails({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  const [user, setUser] = useState({})

  const [users, setUsers] = useState([])
  const [userData, setUserData] = useState(null);
  const userId = navigation.getParam('id');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  if (!userData) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.email}>{userData.email}</Text>
      <Text style={styles.phone}>{userData.phone}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    marginBottom: 5,
  },
  phone: {
    fontSize: 18,
  },
});