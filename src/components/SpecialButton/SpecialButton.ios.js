import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  button: {
    tintColor: "white",
    padding: 10,
    backgroundColor: "blue"
  }
});

const SpecialButton = () => {
  return (
    <TouchableOpacity style={style.button}>
      <Text>hola</Text>
    </TouchableOpacity>
  );
};

export default SpecialButton;
