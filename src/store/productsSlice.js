import {createSlice} from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    initialProducts: (state, action) => {
      config.log('initialProducts', action.payload)
      // state.products = action.payload
    },
  }
})

export const productsAction = productsSlice.actions
export default productsSlice