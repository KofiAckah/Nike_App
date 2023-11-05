import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";

import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import {
  selectDeliveryPrice,
  selectSubTotal,
  selectTotal,
} from "../store/cartSlice";

const ShoppingCartTotal = () => {
  const subtotal = useSelector(selectSubTotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal} US</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US</Text>
      </View>
    </View>
  );
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotal}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    bottom: 30,
    position: "absolute",
    backgroundColor: "black",
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
