import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store.ts'

interface LoadingState {
    isLoading: boolean;
}

const initialState: LoadingState = {
    isLoading: false
}

export const loadingSlice = createSlice({
    name: 'globalLoading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    }
})

export const { setLoading } = loadingSlice.actions
export const selectGlobalLoading = (state: RootState) => state.globalLoadingSlice
export default loadingSlice.reducer