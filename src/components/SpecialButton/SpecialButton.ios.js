import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "cyan"
  }
});

const SpecialButton = () => {
  return (
    <TouchableOpacity style={style.button}>
      <Text>iOS Button</Text>
    </TouchableOpacity>
  );
};

export default SpecialButton;
