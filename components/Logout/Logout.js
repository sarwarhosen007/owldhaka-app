import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {isLogdin,onSignOut} from '../../Services/auth';
import {Home} from '../Home/Home';

export default function Logout({ route,navigation }){

  const [userToken, setUserToken] = useState(false);
  useEffect(() => {
    onSignOut().then((res)=>{
      console.log('LogOut ====== logout.js '+res);
      if (res) {
        navigation.navigate('Home');
      }
    }).catch(err=>{
      console.log(err);
    })
  });

  return (

    <View style={styles.container}>
      <Text style={styles.homeScreenHeader}>LogOuting.....</Text>
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
  