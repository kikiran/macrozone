import React from "react";
import { ScrollView, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const MealsPage = () => {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>
      <View>
        <Text
          style={{
            color: "#ffffff",
          }}
        >
          All Meals
        </Text>
      </View>
    </ScrollView>
  );
};

export default MealsPage;
