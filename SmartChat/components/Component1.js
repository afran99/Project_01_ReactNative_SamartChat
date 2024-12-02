import { Text, StyleSheet, View, Button } from "react-native";

export function Component1() {
  return (

      <View>
        <Text style={stylesheet.text1}>Texr1</Text>
        <Button title="Buttin1"/>
      </View>
    
  );
}

const stylesheet = StyleSheet.create({
  text1: {
    fontSize:20,
    color:"red"
  },
});