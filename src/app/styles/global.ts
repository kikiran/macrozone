import { StyleSheet } from "react-native";

export const colors = {
  background: "#1a1a2e",
  header: "#242444",
  surface: "#2a2a4a",
  primary: "#4fc3f7",
  text: "#ffffff",
  textSecondary: "#a0a0b0",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 30,
    marginBottom: 16,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#16213e",
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    width: "47%",
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  label: {
    fontSize: 14,
    color: "#a0a0b0",
  },
  value: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 4,
  },
  goal: {
    fontSize: 14,
    color: "#a0a0b0",
    marginTop: 2,
  },
  meal_container: {
    backgroundColor: "#16213e",
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  meal_name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  meal_macros: {
    fontSize: 13,
    color: "#a0a0b0",
    marginTop: 4,
  },
});
