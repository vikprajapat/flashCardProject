import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../flashCardSlicer/flashcardSlice";

//create a new store using the `configureStore` function

const store = configureStore({
    //the `reducer` property is an object that maps state keys to the corresponding slice reducers
    reducer: {
        // the `flashcard` state key maps to the `flashcardReducer`
        flashcard: flashcardReducer,

    },
});
export default store;
