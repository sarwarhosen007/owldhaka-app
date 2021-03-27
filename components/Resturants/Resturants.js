import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getRestaurantList} from '../../Services/ResturantService';

export default function Resturants({ navigation }){
   useEffect(() => {
    getRestaurantList().then((res)=>{
        console.log(response.data);
      }).catch(err=>{
        console.log(err);
      })
   });
 

  return (
    <View style={styles.container}>
       <View style={{ flex: 1, flexDirection: 'row', top: '20%',alignSelf: 'flex-start',paddingLeft: "3%"}}>
            <TouchableOpacity  style={styles.singleServiceStyle} 
            onPress={() => navigation.navigate('Resturants')}>
                <Text style={styles.profileScreenTitle}>Haji Biriyani</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.singleServiceStyle}>
                <Text style={styles.profileScreenTitle}>Mamun Biriyani House</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 2.5, flexDirection: 'row', alignSelf: 'flex-start',paddingLeft: "3%"}}>
            <TouchableOpacity style={styles.singleServiceStyle}>
                <Text style={styles.profileScreenTitle}>Bismillah Kebab Ghor</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleServiceStyle}>
                <Text style={styles.profileScreenTitle}>BhuKahri Restora</Text>
            </TouchableOpacity>
        </View>
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
    profileScreenTitle:{
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center', 
        paddingTop: 30
    },
    singleServiceStyle:{
        position: 'relative',
        width: '45%',
        backgroundColor: '#232222',
        height: 100,
        borderRadius: 20,
        margin:5,
         
    },
     

  });
  