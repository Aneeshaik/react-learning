import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, actions) => {
            state.items.push(actions.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItems, removeItems, clearItems} = cartSlice.actions;
export default cartSlice.reducer;