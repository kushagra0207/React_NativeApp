import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";





import Online from "./src/components/Online";


import Physics from "./src/components/Physics";
import Chemistry from "./src/components/Chemistry";
import Maths from "./src/components/Maths";
import NChemistry from "./src/components/NChemistry";
import NPhysics from "./src/components/NPhysics";
// import ButtonChecker from "./src/components/ButtonChecker";
// import Quiz from "./src/components/Quiz";
// import AddGif from "./src/AddGif";


export default function App() {
  return (
    <View style={styles.all}>
       <Online data="3.4k" />
      <Physics title="JEE Physics" number_of_users_online="25k Online" />
      <Chemistry title="JEE Chemistry" number_of_users_online="18K Online" />
      <Maths title="JEE Maths" number_of_users_online="12K Online" />
      <NPhysics title="NEET Physics" number_of_users_online="6K Online" />
      <NChemistry title="NEET Chemistry" number_of_users_online="300" /> 
      {/* <AddGif /> */}

      {/* <Text style={styles.heading}>ONLINE ASSESEMENT</Text>
      <Quiz /> */}
      {/* <ButtonChecker title="JEE Physics" number_of_users_online="25k Online" /> */}
      {/* <Text> I am APPJS file I am rendering the AddGif file</Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    marginBottom: 30,
    marginTop: 60,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'red',
    textAlign: 'center',
},
});
