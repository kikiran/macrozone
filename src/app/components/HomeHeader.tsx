import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const HomeHeader = () => {
  const currentTime = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <View>
      <Text style={globalStyles.date}>The Current time {currentTime}</Text>
    </View>
  );
};

export default HomeHeader;
