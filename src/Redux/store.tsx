import { configureStore } from '@reduxjs/toolkit'
import {AllProductSliceReducer, CartSliceReducer, HeroSectionReducer,ProductReducer} from './Slice'
import AuthReducer from './auth/AuthReducer'

export const store = configureStore({
  reducer: {
    HeroSection: HeroSectionReducer,
    Product : ProductReducer,
    Cart:CartSliceReducer,
    AllProduct:AllProductSliceReducer,
    auth:AuthReducer

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch