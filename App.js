import React,{useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/navigation/DrawerNavigator";
 

const App = () => {

  return (
    <NavigationContainer>
       <DrawerNavigator />
    </NavigationContainer>
  );
};
export default App;