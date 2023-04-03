// this page will map the flashcard with accessing the flashcard UI

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteFlashcard } from "../flashCardSlicer/flashcardSlice"
import FlashcardUI from "../components/Card_UI/FlashcardUI";

const MyFlashCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const flashcard = useSelector((state) => state.flashcard.flashcards);
    //  show All button to view all flashcards
    const [showAll, setShowAll] = useState(false);
    // flashcard showing limits
    const showLimit = !showAll ? 6 : flashcard.length;

    // To delete all the flashcards
    const deleteAll = () => {
        dispatch(deleteFlashcard());
        navigate('/');
        // we want to reload the page so that it checks with the updated data
        window.location.reload();
    }

    return (
        <section className="flex flex-col mt-16">

            {
                // Code below upto line 57 will execulte only if flashcards is not empyt

                flashcard.length > 0 ? (
                    <div>
                        <div className="flex flex-wrap">
                            {/* maping the flashcard  */}
                            {flashcard.slice(0, showLimit).map(({ card }, i) => (
                                // Rendering Card component and passing the props 
                                <FlashcardUI key={i} flashcard={card} />
                            ))}
                        </div>

                        <div className="flex justify-end mr-10">
                            {/* Since we have set the limit of cards to be shown to 6,
                  this button will help user to see other cards also if more than 6 exist*/}

                            <button
                                className="w-16 mt-1  text-lg text-blue-700  rounded-md  bg-white border border-blue-700 "
                                onClick={() => setShowAll(!showAll)}
                            >
                                See all
                            </button>
                            <button className='border border-blue-700 px-6 ml-6 rounded-md bg-white text-blue-700
                  hover:bg-red-600 hover:border-red-600  hover:text-white'
                                onClick={deleteAll}>
                                Delete All
                            </button>
                        </div>
                    </div>
                ) : (
                    // if thare is no flashcard this text with createflashcard link will render
                    <div className="flex items-center justify-center bg-cyan-100 shadow-lg p-20">
                        <h1 className="font-semibold text-xl text-blue-600">
                            Thare is 0 Flashcard Created , Go to
                            <span
                                className="text-red-500 cursor-pointer"
                                onClick={() => navigate("/")}
                            >
                                --CREATE FLASHCARD--
                            </span>
                            to Create New Flashcard
                        </h1>
                    </div>
                )}
        </section>
    );
};

export default MyFlashCard;