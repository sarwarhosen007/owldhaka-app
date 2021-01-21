import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-simple-toast';
import AuthService from '../../Services/AuthService'
import {onSignIn} from '../../Services/auth';

export default function Otp({ route,navigation }){
  const [submitted, setSubmitted] = useState(false);

  const { returnOtp,phone } = route.params;

  useEffect(() => {
    Toast.show('OTP: '+returnOtp,Toast.LONG);
  });

  const {handleSubmit, control, errors } = useForm();
    //navigation.navigate('Profile')

    const onSubmit = async(data) => {
       var data = {
         otp: data.otp,
         phone: phone
       };
       await AuthService.verifyOtp(data)
         .then(response =>{
            if (response.data.isTokenValid) {
              setSubmitted(true);
              if(response.data.isUserExist){
                onSignIn(response.data.token);
                navigation.navigate('Service',{phone:response.data.phone});
              }else{
                navigation.navigate('Profile',{phone:response.data.phone});
              }
            }else{
             setSubmitted(false);
            }
         })
         .catch(error =>{
           console.log(error);
         });
     };
  

 const logo = require('../../assets/logo/logo.png');
  return (
    <View style={styles.container}>
      <Image
            style={styles.logo}
            source={logo}
        />
      <Text style={styles.inputNumberLabel}>Enter OTP</Text>
      <Controller control={control}
      render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.fullWidthTextINput}
            selectionColor='#000'
            keyboardType='numeric'
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="otp"
        rules={{ required: true,minLength:6,maxLength:6 }}
        defaultValue=""
       />
      <TouchableOpacity
          style={styles.button}
          activeOpacity = { .5 }>
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
  