import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import products from "../data/products";

const ProductsScreen = () => {
  return (
    <FlatList
      numColumns={2}
      data={products}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
          />
        </View>
      )}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
