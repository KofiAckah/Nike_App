import { createSlice } from "@reduxjs/toolkit";
import ProductsScreen from "../screens/ProductsScreen";
import products from "../data/products";

const initialState = {
  products: products,
  selectedProducts: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productID = action.payload;
      state.selectedProduct = state.products.find(
        (product) => product.id === productID
      );
    },
  },
});
