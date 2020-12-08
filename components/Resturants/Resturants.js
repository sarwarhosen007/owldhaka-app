import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView,Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
 
export default function Resturants({ navigation }){

  const haziLogo = require('../../assets/resturants/hazi.png');

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: '50%' }} >
            <View style={{top: "3%"}}>
                <View> 
                    <TouchableOpacity  style={styles.singleResturantStyle} onPress={() => navigation.navigate('Items')}>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                        <Text style={styles.resturantTitle}>Hazi Biriyani</Text>
                        <Text style={styles.resturantsubHeader}>The traditional Hazi Biryani which is very popular forit's delicious smell and bla bla bla</Text>
                    </TouchableOpacity >
                </View>
                <View style={{top: "3%"}}>
                    <TouchableOpacity  style={styles.singleResturantStyle} onPress={() => navigation.navigate('Items')}>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                        <Text style={styles.resturantTitle}>Bismillah Kebab Ghor</Text>
                        <Text style={styles.resturantsubHeader}>The traditional Hazi Biryani which is very popular forit's delicious smell and bla bla bla</Text>
                    </TouchableOpacity >
                </View>
                <View style={{top: "6%"}}>
                    <TouchableOpacity  style={styles.singleResturantStyle} onPress={() => navigation.navigate('Items')}>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                        <Text style={styles.resturantTitle}>Hazi Biriyani 3</Text>
                        <Text style={styles.resturantsubHeader}>The traditional Hazi Biryani which is very popular forit's delicious smell and bla bla bla</Text>
                    </TouchableOpacity >
                </View>
                <View style={{top: "9%"}}>
                    <TouchableOpacity  style={styles.singleResturantStyle} onPress={() => navigation.navigate('Items')}>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                        <Text style={styles.resturantTitle}>Hazi Biriyani 4</Text>
                        <Text style={styles.resturantsubHeader}>The traditional Hazi Biryani which is very popular forit's delicious smell and bla bla bla</Text>
                    </TouchableOpacity >
                </View>
            </View>
        </ScrollView>
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
         
      },
      resturantTitle:{
        fontSize: 28,
        color: '#FECE61',
        bottom: 20,
        textAlign: 'center', 
        top: '5%'
    },
    singleResturantStyle:{
        width: '100%', 
        padding: '8%',
        backgroundColor: '#1C201E',
    
    },
    resturantsubHeader:{
        top: '7%',
        color: '#ffffff',
        textAlign: 'center', 
      },
     
  });
  