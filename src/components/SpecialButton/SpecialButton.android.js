import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  button: {
    color: "white",
    padding: 10,
    backgroundColor: "red"
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
