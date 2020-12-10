import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function InputMobileNumber({ navigation }){ 
  const logo = require('../../assets/logo/logo.png');
 
  const {handleSubmit, control, errors } = useForm();

  const onSubmit = data => {
    navigation.navigate('Otp');
  };

  console.log(errors);

  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={logo}
        />
      <Text style={styles.inputNumberLabel}>Mobile Number</Text>
      <Controller 
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={[styles.fullWidthTextINput,errors.phone && styles.inputError ]}
            selectionColor='#000'
            keyboardType='numeric'
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="phone"
        rules={{ required: true,max: 2 }}
        defaultValue=""
      /> 
      
      {errors.phone && <Text style={styles.error}>This is required.</Text>}

      <TouchableOpacity
          style={styles.button}
          activeOpacity = { .5 }>
          {/* <Text style={styles.ButtonTextStyle} onPress={() => navigation.navigate('Otp')}> Next </Text> */}
          <Text style={styles.ButtonTextStyle} onPress={handleSubmit(onSubmit)} > Next </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    fontColor:{
      color: '#ffffff',
    },
    inputError:{
      borderColor: 'red', 
      borderWidth: 5
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
      width: "45%",
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
  error:{
    fontSize: 10,
    color: 'red',
    top: '17%',
  }
    
  });
  