import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    reducers: {
        cacheResults: (state, action)=>{
            state = Object.assign(state, action.payload);
        }
    }
})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;

//LRU cache -> least recently used cache. we can build that as well, we can restrict our cache to only store 100 keys as soon as that reaches start removing the keys from top, to ensure that we do not bloat our state.
