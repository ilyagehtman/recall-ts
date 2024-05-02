import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store.ts'
import { IProduct } from '../domain/IProduct.ts'

interface ProductsState {
  data: IProduct[];
}

const initialState: ProductsState = {
  data: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')!) : []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    push: (state, action: PayloadAction<IProduct>) => {
      state.data.push(action.payload)
      localStorage.setItem('products', JSON.stringify(state.data))
    },
    remove: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload
      state.data = state.data.filter(product => product.id !== productIdToRemove)
      localStorage.setItem('products', JSON.stringify(state.data))
    },
    clean: (state) => {
      state.data = []
      localStorage.setItem('products', JSON.stringify(state.data))
    }
  }
})

export const { push, remove, clean } = productsSlice.actions
export const selectProducts = (state: RootState) => state.products
export default productsSlice.reducer