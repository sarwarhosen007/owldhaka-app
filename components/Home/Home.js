import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

export default function Home({ navigation }){

 const logo = require('../../assets/logo/logo.png');
 
  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={logo}
        />
      <Text style={styles.homeScreenHeader}>Welcome to Owl Dhaka</Text>
      <Text style={styles.homeScreenSubHeader}>Service for the Night Owls in the Dhaka City</Text>
      <TouchableOpacity
          style={styles.button}
          activeOpacity = { .5 }>
          <Text style={styles.ButtonTextStyle} onPress={() => navigation.navigate('InputMobileNumber')}> Get Started </Text>
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
    homeScreenHeader:{
      fontSize: 30,
      fontWeight: 'bold',
      color: '#ffffff',
      top: '5%',
    },
    homeScreenSubHeader:{
      top: '7%',
      color: '#ffffff',
    },
    button: {
      top: '10%',
      backgroundColor: '#f7b614',
      color: 'white',
      borderRadius: 15,
      paddingTop: 10,
      paddingBottom: 10,
      width: "45%"
    },
    ButtonTextStyle:{
      color:'#000',
      textAlign:'center',
      fontSize: 25,
      fontWeight: 'bold'
  }
    
  });
  