import React from 'react';
import { StyleSheet,ScrollView,Image, View, Text, Button } from 'react-native';

export default function Task2({ navigation }) {

    const photos = [
        { id: 1, source: require('../assets/1.jpg') },
        { id: 2, source: require('../assets/2.jpg') },
        { id: 3, source: require('../assets/3.jpg') },
        { id: 4, source: require('../assets/4.jpg') },
        // Add more photos here
      ];
      
  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View >
      
   
      <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <ScrollView
        horizontal
        contentContainerStyle={styles.photoContainer}
        showsHorizontalScrollIndicator={false}
      >
        {photos.map((photo) => (
          <Image key={photo.id} source={photo.source} style={styles.photo} />
        ))}
      </ScrollView>
    </View>

      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}
const styles = StyleSheet.create({
    
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
  