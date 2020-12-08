import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,ScrollView  } from 'react-native';

import { FloatingLabelInput,setGlobalStyles } from 'react-native-floating-label-input';
import RadioButton from '../form-elements/radio-button';

export default function Billing({ navigation }){
    const [birthday, setBirthday] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState(''); 
    const [ radio, setRadio ] = useState('');
    const data = [
      {
        label: 'Cash on delivery',
        value: '1'
      },
      {
        label: 'Bkash',
        value: '2'
      },
      {
        label: 'Online Payment',
        value: '3'
      }
    ];


    const checkRadio = (value) => {
      setRadio(value)
    }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }} style={{flex: 1}}>
      <View style={styles.innerContainer}>
        <View  style={{alignItems: 'center',}}>
            <Text style={styles.billingInfoTitle}>Billing Info</Text>
        </View>
        <View>
            <Text style={styles.inputLabel}>Name</Text>
            <FloatingLabelInput
                value={name}
                onChangeText={value => setName(value)}
            />
        </View>
        <View style={{top: '3%'}}>
            <Text style={styles.inputLabel}>Phone</Text>
            <FloatingLabelInput
                value={email}
                onChangeText={value => setEmail(value)}
                containerStyles={{top: 3}}
            />
        </View>
        <View  style={{top: '6%'}}>
            <Text style={styles.inputLabel}>Email</Text>
            <FloatingLabelInput
                value={email}
                onChangeText={value => setEmail(value)}
                containerStyles={{top: 3}}
            />
        </View>
        <View style={{top: '9%'}}>
            <Text style={styles.inputLabel}>Address</Text>
            <FloatingLabelInput
                value={location}
                multiline={true}
                onChangeText={value => setLocation(value)}
                containerStyles={{top: 3,height: 80}}
            />
        </View>
        <View style={{top: 50}}>
          {
            data.map((q) => {
              return(<RadioButton key={q.label} label={q.label} value={q.value} onSelecting={checkRadio} selected={radio}/>)
            })
          }
        </View>
        <View style={{alignItems: 'center',top:'15%'}}>
            <TouchableOpacity
                style={styles.button}
                activeOpacity = { .5 }>
                <Text style={styles.ButtonTextStyle}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>  
      <StatusBar style="auto" />
      </ScrollView>
    </View>
     
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
      justifyContent: 'center',
      height: '100%'
    },
    innerContainer:{
      width: '90%', 
      top:29,
      paddingLeft: '10%'
    },  
    billingInfoTitle:{
      fontSize: 30,
      color: '#ffffff',
      bottom: 20,
      
    },
    inputLabel:{
        fontSize: 20,
        color: '#ffffff', 
        bottom: '2%'
    }, 
    button: {
      top: '20%',
      backgroundColor: '#f7b614',
      color: 'white',
      borderRadius: 30,
      paddingTop: 8,
      paddingBottom: 8,
      width: "60%"
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
  },
    
  });
  