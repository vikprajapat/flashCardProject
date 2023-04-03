// this page  will display create flashcard and my flashcard link and links 
// created with the help of react-routing

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full pt-2">
            <h1 className="text-4xl text-black font-semibold mb-5">
                Create Flashcard
            </h1>
            <div className="flex items-center space-x-10 mb-3">
                <button className="text-lg font-semibold text-black-600">
                    {/* createflashcard link */}
                    <NavLink
                        to={"/"}
                        style={({ isActive }) => ({
                            borderBottom: isActive ? "4px solid blue" : undefined,
                            paddingBottom: "12px",
                            borderRadius: "3px",
                        })}
                    >
                        Create New
                    </NavLink>
                </button>
                <button className="text-lg font-semibold text-black-600">
                    {/* my flashcard link */}
                    <NavLink
                        to={"/myflashcard"}
                        style={({ isActive }) => ({
                            borderBottom: isActive ? "4px solid blue" : undefined,
                            paddingBottom: "12px",
                            borderRadius: "3px",
                        })}
                    >
                        My Flashcard
                    </NavLink>
                </button>
            </div>
            <hr className="border bg-black-700 border-blue-300 mb-8" />
        </div>
    );
};

export default Navbar;