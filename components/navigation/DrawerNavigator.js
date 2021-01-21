import React, {useEffect} from "react";
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem } from "@react-navigation/drawer";
import { MainStackNavigator } from "./StackNavigator";
import { NavigationActions,StackActions   } from '@react-navigation/native'
 
import Profile from '../Profile/Profile';
import Service from '../Service/Service';
 
const Drawer = createDrawerNavigator();
 

export default function DrawerNavigator(){

  function redirectToLogin({props}){
    console.log("okayyy...");
    //navigation.navigate("InputMobileNumber")
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'InputMobileNumber' })],
    });
    props.navigation.dispatch(resetAction);
  
  }

  return (
    <Drawer.Navigator drawerPosition="right"
    drawerContent={props => {
      return (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem label="Logout" onPress={()=>redirectToLogin(props)} />
        </DrawerContentScrollView>
      )
    }}>
      <Drawer.Screen name="Home" component={MainStackNavigator}/>
      <Drawer.Screen name="My Orders" component={Service} />
      <Drawer.Screen name="My Profile" component={Service} />
      <Drawer.Screen name="Settings" component={Service} />
      <Drawer.Screen name="Terms and Conditions" component={Service} />
      <Drawer.Screen name="Help and Feedback" component={Service} />  
    </Drawer.Navigator>
    
  );
}; 