import { configureStore } from "@reduxjs/toolkit";
import  upReducer  from "./reducers/reducerBlue"; 
import  downReducer from "./reducers/reducerRed";
const store = configureStore( {
    reducer: {
        upReducer,
        downReducer
    }

} )

export default store;