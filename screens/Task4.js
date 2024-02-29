import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, ScrollView, Image, View, Text, TextInput, FlatList, Button, Pressable } from 'react-native';
// import { usersContext } from '../context/usersContextProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Task4({ navigation }) {



  const handlePress = (user) => {
    navigation.navigate('UserDetails', user);
  };
  const [users, setUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").
      then(res => res.json())
      .then(res => setUsers(res))


  }, [])
  // search
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchQuery, users]);

  return (

    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text>{item.name}</Text>
            <Pressable style={styles.btnContainer} onPress={() => handlePress(item)}>
              <Icon name="chevron-right" size={10} color="#000" />
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  searchInput: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  btnContainer: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
    borderRadius: 4,
  },
});
