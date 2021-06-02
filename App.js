import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import white_logo from './assets/white_logo.png'; 
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
    <View style={styles.container}>
      <Image source={white_logo} style={styles.logo} />
      <Text style={styles.instructions}> 
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <TouchableOpacity
        onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { 
    width: 305, 
    height: 305,
    marginBottom: 10,
   },
   instructions: {
     color: '#888', 
     fontSize: 18,
    marginHorizontal: 20,
  },
  button: { 
    backgroundColor: '#BF9222' ,
    padding: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: { 
    fontSize: 20,
    color: '#fff', 
    letterSpacing: 2,
    fontWeight: 'bold',
  },
});
