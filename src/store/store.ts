import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './productSlice.ts'
import { useDispatch, useSelector } from 'react-redux'
import { loadingSlice } from './globalLoadingSlice.ts'

const rootReducer = combineReducers({
    products: productsSlice.reducer,
    globalLoadingSlice: loadingSlice.reducer
})


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()