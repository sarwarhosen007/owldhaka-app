import React, {useEffect,useState} from "react";
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem } from "@react-navigation/drawer";
  import {View} from 'react-native';
import { MainStackNavigator } from "./StackNavigator";
import { NavigationActions,StackActions   } from '@react-navigation/native'
import Logout from '../Logout/Logout';
import {isLogdin} from '../../Services/auth';
 
const Drawer = createDrawerNavigator();
 

export default function DrawerNavigator(){

  const [userToken, setUserToken] = useState(false);

  useEffect(() => {
    isLogdin().then((res)=>{
      setUserToken(res); 
    }).catch(err=>{
      console.log(err);
    })
  });

  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
         <Drawer.Screen name="Logout"  component={Logout}/>
      </DrawerContentScrollView>
    );
  }


  return (
      <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="Services" component={MainStackNavigator}/>
        <Drawer.Screen name="My Orders" component={MainStackNavigator} />
        <Drawer.Screen name="My Profile" component={MainStackNavigator} />
        <Drawer.Screen name="Settings" component={MainStackNavigator} />
        <Drawer.Screen name="Terms and Conditions" component={MainStackNavigator} />
        <Drawer.Screen name="Help and Feedback" component={MainStackNavigator} />  
        <Drawer.Screen name="Logout"  component={Logout}/>
      </Drawer.Navigator>
  );
}