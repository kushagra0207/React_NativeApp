import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Chemistry = ({title,number_of_users_online}) => {
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <TouchableOpacity style={styles.container}>
    <Text style={styles.data}>🔥     {title}</Text>
    <Text style={styles.datas}>{number_of_users_online}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#63cdda',
    marginTop: 35,
    width: '65%',
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
    top: 15,
    right: 10,
    
  },
  datas:{
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'right',
    position: 'absolute',
    top: 35,
    right: 30,
    
  }
  
});

export default Chemistry;