import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductDetails from "../ProductDetails";
import { COLORS } from "../../constants";
import { SCREENS } from "../../constants/messages";

export default function ProductItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  function selectProductHandler() {
    navigation.navigate(SCREENS.PRODUCT_DETAIL, {
      productId: id,
    });
  }
  return (
    <View style={styles.productItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: "#ccc" }}
        onPress={selectProductHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Image source={{ uri: imageUrl }} style={styles.image} />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  productItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: COLORS.secondary,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
    color: COLORS.lightWhite,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
