import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ScrollView  } from 'react-native';

import { FloatingLabelInput,setGlobalStyles } from 'react-native-floating-label-input';

export default function Profile({ navigation }){
    const [birthday, setBirthday] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}
    keyboardShouldPersistTaps='handled'
  >
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.profileScreenTitle}>Create Profile</Text>
        <FloatingLabelInput
        label="Name"
        value={name}
        onChangeText={value => setName(value)}
      />
      <FloatingLabelInput
        label="Email"
        value={email}
        onChangeText={value => setEmail(value)}
        containerStyles={{top: 10}}
      />
      <FloatingLabelInput
        label="Home Location(Additional)"
        value={location}
        multiline={true}
        onChangeText={value => setLocation(value)}
        containerStyles={{top: 20,height: 80}}

      />
      <FloatingLabelInput
        label="Password"
        value={password}
        isPassword={true}
        onChangeText={text => setPassword(text)}
        containerStyles={{top:30}}
      />
      <FloatingLabelInput
        label="Confirm Password"
        value={confirmPassword}
        isPassword={true}
        onChangeText={text => setConfirmPassword(text)}
        containerStyles={{top: 40}}
      />
      <TouchableOpacity
          style={styles.button}
          activeOpacity = { .5 }>
          <Text style={styles.ButtonTextStyle} onPress={() => navigation.navigate('Service')} > Finish </Text>
      </TouchableOpacity>
      </View>  
    
    <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
};

setGlobalStyles.inputStyles = {
  color: '#fff',
};

setGlobalStyles.labelStyles = {
  color: '#BEBEBE',
  fontSize: 15
};

setGlobalStyles.containerStyles = {
  borderColor: '#FECE61',
  borderWidth: 1,
  height: 50,
};

const styles = StyleSheet.create({
    fontColor:{
      color: '#ffffff',
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
  inputTextCommonStyle:{
    color: 'red',
    top: 20,
  }
    
  });
  