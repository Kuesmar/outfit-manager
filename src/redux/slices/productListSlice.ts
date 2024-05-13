import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/entities";

interface IProductListSlice {
    productList: Array<IProduct>;
};

export const initialState: IProductListSlice = {
    productList: []
};

const fetchProducts = createAsyncThunk(
    'products/fetchProductsStatus',
    async (payload, { rejectWithValue }) => {
        const response = await fetch('https://demo9820758.mockable.io/products');
        const products = response.json();
        if(!products){
            return rejectWithValue({error: true})
        }
        return products;
    }
);

export const productListSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.productList = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.error('Error');
        });
        builder.addCase(fetchProducts.pending, (state) => {
            console.log('Pending');
        });

    },
    reducers: {
        
    }
});

export const {  } = productListSlice.actions;
export { fetchProducts };
