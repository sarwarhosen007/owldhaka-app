import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './components/Home/Home';
import InputMobileNumber from './components/InputMobileNumber/InputMobileNumber';
import Otp from './components/Otp/Otp';
import Profile from './components/Profile/Profile';
import Service from './components/Service/Service';
import Resturants from './components/Resturants/Resturants';
import Items from './components/Items/Items';
import Cart from './components/Cart/Cart';
import Billing from './components/Billing/Billing';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
 
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const topBar = {
    title:'',
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerLeft: () => (
      <Image
      style={{width: 50, height: 50, margin: 20}}
      source={require('./assets/logo/logo.png')}
      />
  ),
  headerRight: () =>(
    <Icon name="bars" size={30} style={{margin: 20,color: '#fff'}}/>
  ),
  };

  function LogoTitle({ navigation }) {
    return (
      <Image
        style={{ width: 50, height: 50}}
        source={require('./assets/logo/logo.png')}
      />
    );
  }

  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  


  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

  function RightDrawer() {
    return (
      <Drawer.Navigator drawerPosition="right">
          <Drawer.Screen name="MyOrder" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    )
  }


  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
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
              <Stack.Screen name="RightDrawer" component={RightDrawer}
              options={topBar} />
          </Stack.Navigator>
          
        </NavigationContainer>

    </View>
  );
}


