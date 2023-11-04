import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import products from "../data/products";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Cart")}
        style={{
          flexDirection: "row",
          justifyContent: "center",
          padding: 10,
          backgroundColor: "green",
        }}
      >
        <FontAwesome5 name="shopping-cart" size={18} color="black" />
        <Text style={{ marginLeft: 5, fontWeight: "500" }}>1</Text>
      </Pressable>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("ProductDetails", { item })}
            style={styles.itemContainer}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
      />
    </View>
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
