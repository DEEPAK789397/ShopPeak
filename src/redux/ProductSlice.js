
import { createSlice } from '@reduxjs/toolkit'
// import productData from '../data/products.json'
import productData from '../data/productsData.json'

const initialState = {
    items: productData.products,
    status: "succeeded",
    error: null
}
console.log("Total Products:", productData.products.length)

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})

export default ProductSlice.reducer
