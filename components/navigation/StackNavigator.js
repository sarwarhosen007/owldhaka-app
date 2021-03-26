import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 

import Home from '../Home/Home';
import InputMobileNumber from '../InputMobileNumber/InputMobileNumber';
import Otp from '../Otp/Otp';
import Profile from '../Profile/Profile';
import Service from '../Service/Service';
import Resturants from '../Resturants/Resturants';
import Items from '../Items/Items';
import Cart from '../Cart/Cart';
import Billing from '../Billing/Billing';
import {isLogdin} from '../../Services/auth';

import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function MainStackNavigator ({navigation}) {
  const [userToken, setUserToken] = useState(false);

  useEffect(() => {
    isLogdin().then((res)=>{
      console.log('token In StackNavigation ====== app.js '+res);
      setUserToken(res); 
    }).catch(err=>{
      console.log(err);
    })
  });

  
  const topBar = {
    title:'',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerLeft: () => (
      <Image
      style={{width: 50, height: 50, margin: 20}}
      source={require('../../assets/logo/logo.png')}
      />
  ),
  headerRight: () =>(
    <Icon name="bars" size={30} style={{margin: 20,color: '#fff'}} onPress={() => navigation.toggleDrawer()} />
  ),
  };
 
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
        
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} 
                options={{ headerShown: false }} />
                <Stack.Screen name="InputMobileNumber" component={InputMobileNumber}
                options={{ headerShown: false }} />
                <Stack.Screen name="Otp" component={Otp}
                options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile}
                options={{ headerShown: false }} />
                <Stack.Screen name="Service" component={Service}
              options={topBar} />
              <Stack.Screen name="Resturants" component={Resturants}
              options={topBar} />
              <Stack.Screen name="Items" component={Items}
              options={topBar} />
              <Stack.Screen name="Cart" component={Cart}
              options={topBar} />
              <Stack.Screen name="Billing" component={Billing}
              options={topBar} />

            </Stack.Navigator>
        
        
    </View>
  );
}

  export { MainStackNavigator };


