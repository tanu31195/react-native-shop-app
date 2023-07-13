import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants";
import UserDetailRow from "../components/UserDetailRow";
import useFetch from "../hooks/useFetch";
import { ENDPOINTS, USER_INFO } from "../constants/messages";

export default function UserDetailScreen() {
  const { data: userData } = useFetch(`${ENDPOINTS.USERS}/15`, {});

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://robohash.org/autquiaut.png' }}
        style={styles.userImage}
      />
      <UserDetailRow
        icon={USER_INFO.BIRTH_DATE.icon}
        label={USER_INFO.BIRTH_DATE.label}
        info={userData.birthDate}
      />
      <UserDetailRow
        icon={USER_INFO.CONTACT.icon}
        label={USER_INFO.CONTACT.label}
        info={userData.phone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 170,
    height: 170,
    borderRadius: 20,
    borderColor: COLORS.gray,
    borderWidth: 2,
  },
  text: {
    margin: 1,
    fontWeight: "bold",
  },
});
