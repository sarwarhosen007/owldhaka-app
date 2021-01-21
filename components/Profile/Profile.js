import { StatusBar } from 'expo-status-bar';
import React, { useState,AsyncStorage  } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ScrollView  } from 'react-native';
import AuthService from '../../Services/AuthService'
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-simple-toast';
import {onSignIn} from '../../Services/auth';
 
export default function Profile({ route,navigation }){
   
    const { phone } = route.params;
    const {handleSubmit, control, errors } = useForm();
    
    const onSubmit = async(data) => {

      /**
       * Validate User Data
       */
      var password = data.password;
      var confirmPassword = data.confirm_password;
      if (password !=confirmPassword) {
        Toast.show('Password & Confirm Password Should Be Equal',Toast.LONG);
      }else{
        var data = {
          name: data.name,
          phone: phone,
          email: data.email,
          location: data.location,
          password: data.password,
          c_password: data.confirm_password
        };
         
        await AuthService.createProfile(data)
        .then(response =>{
            onSignIn(response.data.token);
            navigation.navigate('Service'); 
        })
        .catch(error =>{
          console.log(error);
        });
      }
     };
     
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'
  >
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.profileScreenTitle}>Create Profile</Text>
        
        <Controller control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Name"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            style={[styles.borderStyle,styles.inputStyles,errors.name && styles.inputError]}
            value={value}
            placeholder='Name'
            placeholderTextColor={'#fff'} 
          />
          
        )}
          name="name"
          rules={{ required: true}}
          defaultValue=""
       />

      <Controller control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Email"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            style={[styles.paddingtop,styles.borderStyle,styles.inputStyles,errors.email && styles.inputError]}
            value={value}
            placeholder='Email'
            placeholderTextColor={'#fff'} 
          />
        )}
          name="email"
          rules={{ required: true}}
          defaultValue=""
       />

      <Controller control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Location"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            style={[styles.borderStyle,styles.inputStyles,errors.location && styles.inputError,{top:20,height: 80}]}
            value={value}
            placeholder='Home Location(Additional)'
            placeholderTextColor={'#fff'} 
            multiline={true}
          />
        )}
          name="location"
          rules={{ required: true}}
          defaultValue=""
       />

    <Controller control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Password"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            style={[styles.borderStyle,styles.inputStyles,errors.password && styles.inputError,{top:30}]}
            value={value}
            placeholder='Password'
            placeholderTextColor={'#fff'} 
            secureTextEntry
          />
        )}
          name="password"
          rules={{ required: true}}
          defaultValue=""
       />
      
        <Controller control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            label="Confirm Password"
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            style={[styles.borderStyle,styles.inputStyles,errors.confirm_password && styles.inputError,{top:40}]}
            value={value}
            placeholder='Confirm Password'
            placeholderTextColor={'#fff'} 
            secureTextEntry
          />
        )}
          name="confirm_password"
          rules={{ required: true}}
          defaultValue=""
       />
      
      <TouchableOpacity
          style={styles.button}
          activeOpacity = { .5 }>
          <Text style={styles.ButtonTextStyle} onPress={handleSubmit(onSubmit)} > Finish </Text>
      </TouchableOpacity>
      </View>  
    
    <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
    fontColor:{
      color: '#ffffff',
    },
    iconStyle:{
      paddingLeft: '85%',
      color: '#fff',
      fontSize: 18
    },  
    borderStyle:{
      borderColor: '#FECE61',
      borderWidth: 1,
      height: 50,
      width: '100%',
      borderRadius: 15,
    },
    inputStyles:{
      color: '#fff',
      paddingLeft: 10,
    },
    inputError:{
      borderColor: 'red', 
      borderWidth: 3
    },
    paddingtop:{
      top: 10
    },

    container: {
      flex: 1,
      backgroundColor: '#141414',
      alignItems: 'center',
      paddingTop: '40%',
      height: '100%'
    },
    innerContainer:{
      width: '80%',
      alignItems: 'center',
    },  
    profileScreenTitle:{
      fontSize: 30,
      color: '#ffffff',
      bottom: 20,
    },
 
    button: {
      top: '20%',
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
 
  });
  