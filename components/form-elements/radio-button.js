import React from 'react';
import { StyleSheet,Text, TouchableOpacity, View } from 'react-native';
 
const RadioButton = (props) => {
  
  const select = (value) => {
    props.onSelecting(value);
  }
 
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => select(props.value)}
      >
        { props.selected === props.value && (<View style={styles.checkedButton} />) }
      </TouchableOpacity>    
      <Text style={{color: '#fff'}}>{props.label}</Text>
    </View>
  )
}

export default RadioButton;

const styles = StyleSheet.create({
  buttonContainer: {
      flexDirection: 'row',
      margin: 10, 
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor:'#fff',
},
checkedButton: {
  width: 14,
  height: 14,
  borderRadius: 7,
  backgroundColor:'#000'
}
});