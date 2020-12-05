import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Service({ navigation }){
  return (
    <View style={styles.container}>
       <View style={{ flex: 1, flexDirection: 'row', top: '20%',alignSelf: 'flex-start',paddingLeft: "3%"}}>
            <TouchableOpacity  style={styles.singleServiceStyle} 
            onPress={() => navigation.navigate('Resturants')}>
                <Icon name="hamburger" size={30} style={styles.serviceIconStyle}  />
                <Text style={styles.profileScreenTitle}>Food</Text>
            </TouchableOpacity >
            <TouchableOpacity style={styles.singleServiceStyle}>
                <Icon name="utensils" size={30} style={styles.serviceIconStyle}  />
                <Text style={styles.profileScreenTitle}>Catering</Text>
            </TouchableOpacity>
        </View>
        <View style={{flex: 2.5, flexDirection: 'row', alignSelf: 'flex-start',paddingLeft: "3%"}}>
            <TouchableOpacity style={styles.singleServiceStyle}>
                <Icon name="calendar-check" size={30} style={styles.serviceIconStyle}  />
                <Text style={styles.profileScreenTitle}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.singleServiceStyle}>
                <Icon name="box" size={30} style={styles.serviceIconStyle}  />
                <Text style={styles.profileScreenTitle}>Product</Text>
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
        bottom: 20,
        textAlign: 'center', 
    },
    singleServiceStyle:{
        position: 'relative',
        width: '45%',
        borderColor: '#FFAA00',
        borderWidth: 2,
        height: 100,
        borderRadius: 20,
        margin:5
    },
    serviceIconStyle:{
        margin: 20,
        color: '#fff',
        textAlign: 'center', 
    }
  });
  