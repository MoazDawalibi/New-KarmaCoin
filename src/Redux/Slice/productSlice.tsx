
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TCardProduct } from '../../Layout/app/Types';

interface ProductState {
    value: TCardProduct
}

const initialState: ProductState = {
    value: {
        data: [],
        title: '',
        href: '',
        count: 0,
        icon: null,
        
    },
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductData: (state, action: PayloadAction<TCardProduct>) => {
            return {
                ...state,
                value: action.payload,
            };
        },
    },
})

export const { setProductData } = ProductSlice.actions

export default ProductSlice.reducer