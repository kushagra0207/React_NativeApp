import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';



const NChemistry = ({title,number_of_users_online}) => {
const onPress = () =>{
    alert('You tapped the button!');    
    
 }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.data}>🧪{title}</Text>
    <Text style={styles.datas}>{number_of_users_online}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#596275',
    marginTop: 35,
    width: '20%',
    height: 60,
    borderRadius: 20,
    marginLeft: 5,
    position: 'relative',
   

  },
  data:{
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    

    top: 5,
    right: 1,
    
  },
  datas:{
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 40,
    right: 30,
    
  }
  
});

export default NChemistry;