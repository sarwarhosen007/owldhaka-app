import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "./StackNavigator";
 
import Profile from '../Profile/Profile';
import Service from '../Service/Service';

const Drawer = createDrawerNavigator();
 
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Home" component={MainStackNavigator}/>
      <Drawer.Screen name="My Orders" component={Service} />
      <Drawer.Screen name="My Profile" component={Service} />
      <Drawer.Screen name="Settings" component={Service} />
      <Drawer.Screen name="Terms and Conditions" component={Service} />
      <Drawer.Screen name="Help and Feedback" component={Service} />
      <Drawer.Screen name="Log Out" component={Service} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;