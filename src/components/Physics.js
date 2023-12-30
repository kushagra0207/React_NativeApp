import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
// import AddGif from './AddGif';
// import Quiz from './Quiz';


const Physics = ({title,number_of_users_online}) => {
  // const [isPublished, setIsPublished] = useState(false);
  // const handlePublish = () => setIsPublished(true);
 
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{console.log("Hello")}}>
    <Text style={styles.data}>😎     {title} </Text>
    <Text style={styles.datas}>{number_of_users_online}</Text>
    
    </TouchableOpacity>


    // <View style={styles.container} >
    // <Button style={styles.container} title="Press me" onPress={() => alert("Simple Button pressed")} >
    // <Text style={styles.data}>😎     {title} </Text>
    //  <Text style={styles.datas}>{number_of_users_online}</Text>
    //  </Button>
     
  );
};

















const styles = StyleSheet.create({
  container:{
    backgroundColor: '#786fa6',
    marginTop: 25,
    width: '80%',
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

export default Physics;