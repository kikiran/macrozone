import { Link } from "expo-router";
import { ScrollView, Text } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { globalStyles } from "../styles/global";
import MacroGrid from "../components/MacroGrid";
import RecentMeals from "../components/RecentMeals";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}
