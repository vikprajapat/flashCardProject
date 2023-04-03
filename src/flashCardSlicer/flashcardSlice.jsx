import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //get the flashcards from local storage
    flashcards: localStorage.getItem("flashcards")
        //parse the flashcards if they exist
        ? JSON.parse(localStorage.getItem("flashcards"))
        : [], //if the flashcards dont't exist , initialize an empty array
};

export const flashcardSlice = createSlice({
    name: "flashcard", //give the slice the name "flashcard"
    initialState, //defined initial state for the slice
    reducers: {
        setFlashCard(state, action) { //the `setFlashCard` action handler
            state.flashcards.push({ //pushes a new flashcard to the  `flashcards` array
                card: action.payload, //the new flashcard is the payload of the `action`

            });
            localStorage.setItem("flashcards", JSON.stringify(state.flashcards));//set the flashcards in local storage

        },
        // This will change the compare id each time when user clicks a flashcard
        setId(state, action) {
            state.compareId = action.payload;
        },

        // This is usefull for conditional rendering of modal component
        setModal(state, action) {
            state.modal = !state.modal;
        },
        // We clear all flashcard using localStorage.clear()
        // It will clear localStorage
        deleteFlashcard(state, action) {
            localStorage.clear();
        },
    },
});
export const { setFlashCard, setId, setModal, deleteFlashcard } = flashcardSlice.actions; //export the `setFlashCard` action creator

export default flashcardSlice.reducer;
