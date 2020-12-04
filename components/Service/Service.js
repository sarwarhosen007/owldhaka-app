import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView,StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Service({ navigation }){
  return (
    <View style={styles.container}>
       <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.singleServiceStyle}>
             <Icon name="utensils" size={30} style={{margin: 20,color: '#fff'}}  />
             <Text style={styles.profileScreenTitle}>Food</Text>
        </View>
        <View style={styles.singleServiceStyle} >
            <Icon name="bars" size={30} style={{margin: 20,color: '#fff'}}  />
            <Text style={styles.profileScreenTitle}>Catering</Text>
        </View>
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
        fontSize: 30,
        color: '#ffffff',
        bottom: 20,
    },
    singleServiceStyle:{
        width: '50%',
        height: 50,
    }
  });
  