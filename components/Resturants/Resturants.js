import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ResturantService from '../../Services/ResturantService'
import { FlatGrid } from 'react-native-super-grid';

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default function Resturants({ navigation }){

  const [isLoaded, setLoadted] = useState(false);
  const [resturants, setResturants] = useState([]);
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
  ]);

   useEffect(() => {
    ResturantService.getRestaurantList().then((res)=>{
        setResturants(res.data)
      }).catch(err=>{
        console.log(err);
      })
   });
 

  return (
    <View style={styles.container}>
        <ScrollableTabView
          style={{ marginTop: 20,borderBottomColor:'' }}
          tabBarActiveTextColor='white'
          tabBarTextStyle={{fontFamily:'Roboto', fontSize: 20,fontWeight:'bold'}}
          tabBarUnderlineStyle={{backgroundColor:'', height:0}}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <Text tabLabel='All'>My</Text>
          <Text tabLabel='Returants'>favorite</Text>
          <Text tabLabel='Food Types'>project</Text>
        </ScrollableTabView>

        {/* <FlatGrid
            itemDimension={130}
            data={resturants}
            style={styles.gridView}
            spacing={10}
            renderItem={({ item }) => (
              <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
              </View>
            )}
        />

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
        </View> */}
    
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
    tabViewStyle:{
      color:'#fff',
      marginTop: 20 
    },
    gridView: {
      marginTop: 10,
      flex: 1,
    },
  
  });
  