import * as SecureStore from 'expo-secure-store';

export const isLogdin = async () => {
    try{
      const token = await SecureStore.getItemAsync('_bearerToken');
      if (token != null) {
          return true;
      }else{
          return false;
      }
    } catch(error) {
      return false;
    }
}

export const getToken = async () => {
    try{
       const token = await SecureStore.getItemAsync('_bearerToken');
       return token;
    } catch(error) {
        throw error;
    }
}

export const onSignIn = async (token) => {

     try {
         console.log("When Loging "+token);
        await SecureStore.setItemAsync('_bearerToken', JSON.stringify(token));
        return true;         
     } catch (error) {
        return false;
     }
}

export const onSignOut = async () => {
    try {
        SecureStore.deleteItemAsync('_bearerToken');
        return true;
    } catch (error) {
        return false;
     } 

} 

