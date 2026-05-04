import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/global";
import MacroCard from "./MacroCard";

const MacroGrid = () => {
  return (
    <View style={globalStyles.grid}>
      <MacroCard label="Carbs" value="150g" goal="200g" color="#FF6384" />
      <MacroCard label="Proteins" value="100g" goal="150g" color="#36A2EB" />
      <MacroCard label="Fats" value="50g" goal="70g" color="#FFCE56" />
      <MacroCard
        label="Calories"
        value="2000kcal"
        goal="2500kcal"
        color="#4BC0C0"
      />
    </View>
  );
};

export default MacroGrid;
