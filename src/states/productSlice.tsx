import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  ID_Product: number;
  Product_Brand: string;
  Product_Desc: string;
  Product_Type: string;
  Product_Img: string;
  Product_Name: string;
};

interface ProductInterface {
  productsDB: Record<string, Product> | null;
}
const initialState: ProductInterface = {
  productsDB: null,
};

const productSlice = createSlice({
  name: "productStates",
  initialState,
  reducers: {
    setProductsDB: (state, actions: PayloadAction<Record<string, Product>>) => {
      state.productsDB = actions.payload;
    },
  },
});

export const { setProductsDB } = productSlice.actions;
export default productSlice.reducer;
