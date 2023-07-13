import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import React from "react";

export default function ProductDetailScreen({route}) {
  // const route = useRoute();
  // console.log("🚀 ~ file: ProductDetailScreen.js:7 ~ ProductDetailScreen ~ route:", route)
  // const productId = route.params?.productId;

  return (
    <View>
      <Text>Product Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
