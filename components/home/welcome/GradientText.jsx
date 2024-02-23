import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedViewIOS from "@react-native-masked-view/masked-view";
    
export default function GradientText(props) {
  return (
    <MaskedViewIOS maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>{props.text}</Text>} >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["blue", "red"]}
      >
        <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
      </LinearGradient>
    </MaskedViewIOS>
  );
}