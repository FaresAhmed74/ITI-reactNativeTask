import React from 'react';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';

const photos = [
  { id: 1, source: require('./assets/1.jpg') },
  { id: 2, source: require('./assets/2.jpg') },
  { id: 3, source: require('./assets/3.jpg') },
  { id: 4, source: require('./assets/4.jpg') },
  // Add more photos here
];

const Task2 = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4C75',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    top:30,
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

export default Task2;