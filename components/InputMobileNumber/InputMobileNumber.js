import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,ScrollView,Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import AuthService from '../../Services/AuthService'
import Toast from 'react-native-simple-toast';
import {onSignOut} from '../../Services/auth';
import { useIsFocused } from "@react-navigation/native";


export default function InputMobileNumber({ navigation }){ 

  const isVisible = useIsFocused();
  const [otp, setOtp] = useState(initialOtpState);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      console.log('loginout-----');
      onSignOut().then((res)=>{
        Toast.show('LogedOut Successfully!');
      }).catch(err=>{
        throw err;
      });
    }
  });

  const initialOtpState = {
    phone: "",
  };

  const logo = require('../../assets/logo/logo.png');
 
  const {handleSubmit, control, errors } = useForm();

    const onSubmit = async(data) => {
      setSubmitted(false);
       var data = {
         phone: data.phone,
       };
       await AuthService.sendOtp(data)
         .then(response =>{
            if (response.data.otp) {
              navigation.navigate('Otp',{returnOtp:JSON.parse(response.data.otp),phone:data.phone});
              setSubmitted(true);
            }else{
             setSubmitted(false);
            }
         })
         .catch(error =>{
           console.log(error);
         });
     };
  
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'
  >
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
        rules={{ required: true,minLength:11,maxLength:11 }}
        defaultValue=""
      /> 
    
      <TouchableOpacity
          style={styles.button} activeOpacity = { .5 } 
          disabled={true}>
          <Text style={styles.ButtonTextStyle} onPress={handleSubmit(onSubmit)} > NEXT </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    fontColor:{
      color: '#ffffff',
    },
    error:{
      fontSize:12,
      color: '#fff',
      top: '7%',
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
      height: '100%'
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
      bottom: '7%'
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
  