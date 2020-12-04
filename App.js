import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home/Home';
import InputMobileNumber from './components/InputMobileNumber/InputMobileNumber';
import Otp from './components/Otp/Otp';
import Profile from './components/Profile/Profile';
import Service from './components/Service/Service';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
 
  const Stack = createStackNavigator();
  
  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50}}
        source={require('./assets/logo/logo.png')}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Service">
              <Stack.Screen name="Home" component={Home} 
              options={{ headerShown: false }} />
              <Stack.Screen name="InputMobileNumber" component={InputMobileNumber}
              options={{ headerShown: false }} />
              <Stack.Screen name="Otp" component={Otp}
              options={{ headerShown: false }} />
              <Stack.Screen name="Profile" component={Profile}
              options={{ headerShown: false }} />
              <Stack.Screen name="Service" component={Service}
              options={{
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
                <Icon name="bars" size={30} style={{margin: 20,color: '#fff'}}  />
              ),
              }} />
          </Stack.Navigator>
        </NavigationContainer>
    </View>
  );
}


