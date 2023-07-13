import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";

export default function ProductDetails({
  style,
  textStyle,
}) {
  const iconSize = 24;
  return (
    <View style={[styles.details, style]}>
      <Ionicons name='cash-outline' size={iconSize} color={COLORS.lightWhite} />
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    color: COLORS.lightWhite,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
