import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

type MacroCardProps = {
  label: string;
  value: string;
  goal: string;
  color: string;
};

const MacroCard = ({ label, value, goal, color }: MacroCardProps) => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.label}>{label}</Text>
      <Text style={globalStyles.value}>{value}</Text>
      <Text style={globalStyles.goal}>{goal}</Text>
    </View>
  );
};

export default MacroCard;
