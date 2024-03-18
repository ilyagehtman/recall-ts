import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store.ts";
import { Product } from "../domain/Product.ts";

interface ProductsState {
    data: Product[];
}

const initialState: ProductsState = {
    data: localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")!) : []
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        push: (state, action: PayloadAction<Product>) => {
            state.data.push(action.payload);
            localStorage.setItem("products", JSON.stringify(state.data));
        },
        remove: (state, action: PayloadAction<string>) => {
            const productIdToRemove = action.payload;
            state.data = state.data.filter(product => product.id !== productIdToRemove);
            localStorage.setItem("products", JSON.stringify(state.data));
        }
    }
});

export const { push, remove } = productsSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;