import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, ScrollView,Text, View,Picker,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Cart({ navigation }){

 const [countrie, setCountrie] = useState('uk');
 const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }} style={{flex: 1}}>
            <View style={{top: "10%"}}>
                <View style={[styles.singleItemStyle]}> 
                    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
                        <View style={{paddingTop: '5%', paddingLeft: '5%',width: '40%'}}>
                            <Text style={styles.itemTitle}>Mutton Biriyani Full</Text>
                            <Text style={styles.itemResturantName}>Hazi Biriyani</Text>
                        </View>
                        <View style={{paddingTop: '5%',paddingLeft: '5%'}}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Icon name="plus"  style={styles.iconPlus}  size={20} />
                                <Text style={styles.cartQty}>5</Text>
                                <Icon name="minus"  size={20} style={styles.iconMinus} color="#fff" />
                            </View>  
                        </View>
                        <View style={{paddingTop: '5%',paddingLeft: '15%', width: '30%'}}> 
                            <Text style={[styles.itemPrice,{flex: 1, flexWrap: 'wrap',}]}>৳500</Text>
                        </View> 
                    </View>
                    <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
                        <View style={{paddingTop: '5%', paddingLeft: '5%'}}>
                            <Text style={styles.itemTitle}>Mutton Biriyani Full</Text>
                            <Text style={styles.itemResturantName}>Hazi Biriyani</Text>
                        </View>
                        <View style={{paddingTop: '5%',paddingLeft: '5%' }}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Icon name="plus"  style={styles.iconPlus}  size={20} />
                                <Text style={styles.cartQty}>5</Text>
                                <Icon name="minus"  size={20} style={styles.iconMinus} color="#fff" />
                            </View>  
                        </View>
                        <View style={{paddingTop: '5%', paddingLeft: '15%', width: '30%'}}> 
                            <Text style={[styles.itemPrice,{flex: 1, flexWrap: 'wrap'}]}>৳400</Text>
                        </View> 
                    </View>
                </View>
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
                        <View style={{paddingTop: '5%', paddingLeft: '5%'}}>
                            <Text style={styles.labelSubTotal}>Sub Total</Text>
                            <Text style={styles.labelServiceCharge}>Inc Service Charge</Text>
                        </View>
                         
                        <View style={{paddingTop: '5%', paddingLeft: '15%', width: '30%'}}> 
                            <Text style={[styles.itemPrice,{flex: 1, flexWrap: 'wrap'}]}>৳900</Text>
                        </View> 
                </View>
                <View style={{top:'5%',paddingBottom:'5%',flex: 1, flexDirection: 'row',justifyContent: 'space-between',backgroundColor:'#1C201E'}}>
                    <View style={{paddingTop: '5%', paddingLeft: '5%'}}>
                        <Text style={styles.labelDeliveryCost}>Delivery Cost</Text>
                        {/* <View style={{width: '100%',top: '10%'}}>
                            <DropDownPicker
                                items={[
                                    {label: 'BANANI', value: 'banani'},
                                    {label: 'GULSHAN', value: 'gulshan'},
                                    {label: 'MUHAMMADPUR', value: 'gulshan'},
                                    
                                ]}
                                placeholder="Select Area"
                                searchable={true}
                                searchablePlaceholder="Search for an Area"
                                multipleText="%d items have been selected."
                                min={0}
                                max={10}
                                defaultValue={''}
                                containerStyle={{width: 150, height: 40}}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                
                            />
                        </View> */}
                        <View style={{width: '100%',top: '12%', backgroundColor: '#FFFFFF',borderRadius: 20}}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 40, width: 150,flex: 1 }}
                                mode="dialog"
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                               
                            >
                                <Picker.Item value='' label='Select Area' />
                                <Picker.Item label="DHANMANDI" value="dhanmandi" />
                                <Picker.Item label="BASHUNDHARA" value="bashundhara" />
                                <Picker.Item label="GULSHAN1" value="gulshan1" />
                                <Picker.Item label="GULSHAN2" value="gulshan2" />
                                <Picker.Item label="MAHAMMADPUR" value="MAHAMMADPUR" />
                                <Picker.Item label="BANANI" value="banani" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{paddingTop: '5%', paddingLeft: '15%', width: '30%'}}> 
                        <Text style={[styles.itemPrice,{flex: 1, flexWrap: 'wrap'}]}>৳90</Text>
                    </View> 
                </View>
                <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between',}}>
                        <View style={{paddingTop: '10%', paddingLeft: '5%'}}>
                            <Text style={styles.labelTotal}>Total</Text>
                        </View>
                         
                        <View style={{paddingTop: '10%', paddingLeft: '15%', width: '30%'}}> 
                            <Text style={[styles.itemPrice,{flex: 1, flexWrap: 'wrap'}]}>৳990</Text>
                        </View> 
                </View>
                <View style={{marginLeft:'5%', overflow: 'hidden',top: '2%' }}>
                    <TouchableOpacity
                        style={styles.buttonPromo}
                        activeOpacity = { .5 }>
                        <Text style={styles.promoButtonTextStyle} >Add Promo</Text>
                    </TouchableOpacity>
                </View>
                <View style={{display: "flex",justifyContent: "center",alignItems: "center", top: '10%'}}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity = { .5 }>
                        <Text style={styles.ButtonTextStyle} onPress={() => navigation.navigate('Billing')}  > Next </Text>
                    </TouchableOpacity>
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
    },
    itemTitle:{
        fontSize: 15,
        color: '#FFFFFF',
        bottom: 20,
        top: '5%'
    },
    singleItemStyle:{
        backgroundColor: '#1C201E',   
        paddingBottom: '8%',
    },
    itemResturantName:{
        top: '7%',
        color: '#FF6600',
        fontSize: 15, 
    },
    itemPrice:{
        top: '7%',
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    cartQty:{ 
        color: '#FFFFFF', 
        paddingBottom: '2%',
        borderRadius:100,
        fontSize: 15,
    },
    iconPlus:{
      color: '#FECE61',
      paddingRight: '5%',  
    },
    iconMinus:{
        color: '#FECE61',
        paddingLeft: '5%'  
    },
    labelSubTotal:{
        fontSize: 25,
        color: '#FFFFFF',
        top: '5%'
    },
    labelServiceCharge:{
        fontSize: 15,
        color: '#C2C2C2',
        bottom: 20,
        top: '5%'
    },
    labelDeliveryCost:{
        fontSize: 15,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    labelTotal:{
        fontSize: 25,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#f7b614',
        color: 'white',
        borderRadius: 25,
        paddingTop: 8,
        paddingBottom: 8,
        width: "45%",
      },
      ButtonTextStyle:{
        color:'#000',
        textAlign:'center',
        fontSize: 25,
        fontWeight: 'bold'
    },

    buttonPromo: {
        backgroundColor: '#FF3636',
        color: 'white',
        borderRadius: 15,
        paddingTop: 8,
        paddingBottom: 8,
        width: "35%",
      },
      promoButtonTextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 18, 
    },
    
  });
  