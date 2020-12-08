import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView,Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Items({ navigation }){

  const haziLogo = require('../../assets/items/item-1.png');

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
            <View style={{top: "3%"}}>
                <View style={[styles.singleItemStyle]}> 
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{paddingTop: '5%'}}>
                            <Text style={styles.itemTitle}>Mutton Kacchi Full</Text>
                            <Text style={styles.itemPrice}>Price 220tk</Text>
                        </View>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                    </View>
                    <View>
                            <Text style={styles.itemDescription}>
                            The traditional Hazi Biryani which is very popular
                            for it's delicious smell and bla bla bla
                            </Text>
                            <TouchableOpacity
                            style={styles.button}
                            activeOpacity = { .5 }>
                            <Text style={styles.ButtonTextStyle} > Add to Cart </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.singleItemStyle,{top:'3%'}]}> 
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{paddingTop: '5%'}}>
                            <Text style={styles.itemTitle}>Mutton Kacchi Full</Text>
                            <Text style={styles.itemPrice}>Price 220tk</Text>
                        </View>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                    </View>
                    <View>
                            <Text style={styles.itemDescription}>
                            The traditional Hazi Biryani which is very popular
                            for it's delicious smell and bla bla bla
                            </Text>
                            <TouchableOpacity
                            style={styles.button}
                            activeOpacity = { .5 }>
                            <Text style={styles.ButtonTextStyle}> Add to Cart </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.singleItemStyle,{top:'6%'}]}> 
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{paddingTop: '5%'}}>
                            <Text style={styles.itemTitle}>Mutton Kacchi Full</Text>
                            <Text style={styles.itemPrice}>Price 220tk</Text>
                        </View>
                        <Image
                            style={styles.logo}
                            source={haziLogo}
                        />
                    </View>
                    <View>
                            <Text style={styles.itemDescription}>
                            The traditional Hazi Biryani which is very popular
                            for it's delicious smell and bla bla bla
                            </Text>
                            <TouchableOpacity
                            style={styles.button}
                            activeOpacity = { .5 }>
                            <Text style={styles.ButtonTextStyle} > Add to Cart </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
        <TouchableOpacity
            style={styles.floatingCart} onPress={() => navigation.navigate('Cart')}>
             <Text 
             style={styles.cartQty}>5</Text>
            <Icon name="shopping-basket"  size={30} color="#202020" />
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
         
      },
      itemTitle:{
        fontSize: 20,
        color: '#FECE61',
        bottom: 20,
        textAlign: 'center', 
        top: '5%'
    },
    singleItemStyle:{
        width: '100%',
        backgroundColor: '#1C201E',
        padding: "5%"
    },
    itemPrice:{
        top: '7%',
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
      },
      itemDescription:{
        color: '#ffffff',
      },
      button: {
        top: '20%',
        backgroundColor: '#FFAA00',
        color: 'white',
        borderRadius: 25,
        paddingTop: 10,
        paddingBottom: 10,
        width: "50%",
        marginBottom: '10%'
      },
      ButtonTextStyle:{
        color:'#000000',
        textAlign:'center',
        fontSize: 23,
        fontWeight: 'bold'
    },
    floatingCart:{
        borderWidth:1,
        borderColor:'#FFF4DE',
        alignItems:'center',
        justifyContent:'center',
        width:70,
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10,
        height:70,
        backgroundColor:'#FFF4DE',
        borderRadius:20,
    },
    cartQty:{
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '2%',
        paddingBottom: '2%',
        borderRadius:100,
        fontSize: 15,
    }
  });
  