import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "./ProductItem";

export default function ProductsList({ items }) {
  function renderProductItem(itemData) {
    const item = itemData.item;
    const productItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.thumbnail,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <ProductItem {...productItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
