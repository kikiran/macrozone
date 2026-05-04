import * as Haptics from "expo-haptics";
import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

type MealItemProps = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  onDelete?: () => void;
};

const MealItem = ({
  id,
  name,
  calories,
  protein,
  carbs,
  fat,
  onDelete,
}: MealItemProps) => {
  const handleLongPress = () => {
    console.log("Long pressed meal:", id);
  };

  return (
    <TouchableOpacity style={globalStyles.meal_container} onLongPress={handleLongPress}>
      <Text style={globalStyles.meal_name}>{name}</Text>
      <Text style={globalStyles.meal_macros}>
        {protein}g P • {carbs}g C • {fat}g F
      </Text>
    </TouchableOpacity>
  );
};

export default MealItem;
