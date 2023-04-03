// in this App.js file  we declare the React router on createflachcard , myflashcard
// and flashcarddetails pages and set up the header and navbar components

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFlashCard from "./pages/CreateFlashCard";
import MyFlashCard from "./pages/MyFlashCard";
import FlashCardDetails from "./pages/FlashCardDetails";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen ">
        <Header />
        <div className="px-5 xl:px-32 container  mt-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<CreateFlashCard />} />
            <Route path="/myflashcard" element={<MyFlashCard />} />


            {/* The "groupId" URL parameter can be accessed inside the
            FlashCardDetails component and used to retrieve information specific
            to the URL parameter. */}
            <Route
              path="/flashcarddetails/:groupId"
              element={<FlashCardDetails />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;