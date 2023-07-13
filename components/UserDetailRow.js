import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import { Ionicons } from "@expo/vector-icons";

export default function UserDetailRow({ icon, label, info }) {

  return (
    <View style={styles.component}>
      <View style={styles.icon}>
        <Ionicons
          name={icon}
          size={40}
          color={COLORS.gray}
        />
      </View>
      <View style={styles.rowInfo}>
        <Text style={styles.text}>{label} {info}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  component: {
    height: 60,
    width: "90%",
    padding: 5,
    marginTop: 10,
    flexDirection: "row",
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    flex: 1,
  },
  rowInfo: {
    paddingLeft: 5,
    flex: 7,
  },
  text: {
    fontWeight: "bold",
  },
});
