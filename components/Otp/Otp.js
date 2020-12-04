import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';

export default function Otp({ navigation }){

 const logo = require('../../assets/logo/logo.png');
  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={logo}
        />
      <Text style={styles.inputNumberLabel}>Enter OTP</Text>
      <TextInput
        style={styles.fullWidthTextINput}
        selectionColor='#000'
        keyboardType='numeric'
        />
      <TouchableOpacity
          style={styles.button}
          activeOpacity = { .5 }>
          <Text style={styles.ButtonTextStyle} onPress={() => navigation.navigate('Profile')} > Next </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    fontColor:{
      color: '#ffffff',
    },
    container: {
      flex: 1,
      backgroundColor: '#141414',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputNumberLabel:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#ffffff',
      top: '5%',
      width: "80%",
    },

    button: {
      top: '12%',
      backgroundColor: '#f7b614',
      color: 'white',
      borderRadius: 15,
      paddingTop: 8,
      paddingBottom: 8,
      width: "45%"
    },
    ButtonTextStyle:{
      color:'#000',
      textAlign:'center',
      fontSize: 25,
      fontWeight: 'bold'
  },
  fullWidthTextINput: {
    backgroundColor: '#fff',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    borderRadius: 50,
    top: '12%',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    
  },
    
  });
  