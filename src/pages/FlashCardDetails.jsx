
// This page is create for showing the details of flashcard we created
// and in this form also have share button with share  popup page

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jsPDF from 'jspdf';
import { BiArrowBack } from "react-icons/bi"; //BsFillPrinterFill
import { BsFillShareFill, BsFillCloudDownloadFill, BsFillPrinterFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import ModalShare from "../components/Modal/ModalShare";
import { setModal } from '../flashCardSlicer/flashcardSlice';
import { useNavigate, useParams } from "react-router-dom";



const Flashcard = () => {
    const { groupId } = useParams();
    // for back button
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // accessing the data from the store
    const cards = useSelector((state) => state.flashcard.flashcards);
    const [ourCard, setOurCard] = useState({});
    const [singleCardDetail, setSingleCardDetail] = useState({});

    // In this case, the function is used to display a single card detail when the card is selected by its id. The id argument is used to filter the array of cards and find the specific card to display.
    const displayCard = (id) => {
        const showSingleCard = ourCard.cards.filter((c) => c.cardid === id);
        setSingleCardDetail(showSingleCard[0]);
    };

    // the effect is used to filter a list of cards based on the groupId value and update the component state with the filtered cards. The effect runs whenever the groupId value changes
    useEffect(() => {
        if (!groupId || !cards) return;
        const temp = cards.filter((c) => c.card.groupid === groupId);
        setOurCard(temp[0].card);
    }, [groupId]);

    // This will help us to use conditional rendering for modal component
    const modal = useSelector((state) => state.flashcard.modal);

    useEffect(() => {
        ourCard.cards && setSingleCardDetail(ourCard.cards[0]);
    }, [ourCard]);

    //Share button
    const [isCopied, setIsCopied] = useState(false);
    const [url, setUrl] = useState();
    const [share, setShare] = useState("none");

    // share handler  and accessing url from web location
    const shareHandlerOpen = () => {
        setShare("flex");
        setUrl(`${document.location.href}`);
    };

    const shareHandlerClose = () => {
        setShare("none");
    };

    //  url copied text with some thime limite
    useEffect(() => {
        isCopied &&
            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
    }, [isCopied]);

    // A function which returns the hard coded values for A4 size pdf.
    // By making a seprate function we can use it in download and print functions
    // without writing the whole code again and also both functons will do the expected job

    const pdfDoc = () => {
        var doc = new jsPDF('portrait', 'px', 'a4', 'true');
        doc.text(30, 20, `Group Name : ${ourCard.groupname}`);

        var description = `Description : ${ourCard.groupdescription}`;
        var strArr = doc.splitTextToSize(description, 400);
        doc.text(strArr, 30, 40);

        doc.addImage(`${ourCard.groupimg}`, 'jpg', 35, 430, 180, 200);

        doc.text(30, 335, `Term : ${singleCardDetail.cardname}`);
        var defination = `Defination : ${singleCardDetail.carddescription}`;
        var strArr2 = doc.splitTextToSize(defination, 400);
        doc.text(strArr2, 30, 350);



        return doc;
    }
    // This will make all details fit in a A4 size with hard codded values
    const handelDownload = () => {
        var doc = pdfDoc();
        doc.save(`${ourCard.groupname}.pdf`);
    }

    // This will open a new window to print the pdf
    const handelPrint = () => {
        var doc = pdfDoc();
        doc.autoPrint();
        // this will open the print page in new window
        doc.output('dataurlnewwindow');
    }

    return (
        <section className="flex flex-col text-slate-600">
            <header className='flex'>

                <BiArrowBack className='text-3xl mr-6 cursor-pointer'
                    id='backArrow' onClick={() => navigate(-1)} />

                <div className='flex flex-col'>
                    <h2 className='text-xl text-black font-bold'>
                        {ourCard.groupname}
                    </h2>

                    <p className='my-2'>
                        {ourCard.groupdescription}
                    </p>
                </div>

            </header>
            <main className="mt-6 grid grid-rows-1 md:grid-cols-4">
                <aside className="col-span-1 bg-white w-[60vw] md:w-[14rem] xl:w-[14rem]  px-4 py-3  mr-2 rounded-md ">
                    <h2 className="p-2 ">Flashcards</h2>
                    <hr />
                    {/* displaing card in colums */}
                    <hr className="mb-2 mr-4 " />
                    {ourCard.cards &&
                        ourCard.cards.map((card) => (
                            <p
                                key={card.cardid}
                                className={`py-2 px-8 text-slate-700 font-medium hover:bg-slate-100 cursor-pointer ${card.cardid === singleCardDetail.cardid &&
                                    "!text-red-500 !font-bold"
                                    }`}
                                onClick={() => displayCard(card.cardid)}
                            >
                                {card.cardname}
                            </p>
                        ))}
                </aside>

                <section className="col-span-3 md:col-span-2 flex flex-col xl:flex-row items-center w-full bg-white shadow-lg rounded-lg">
                    {/* default displaing image for cards with description */}
                    <div className="flex flex-col">
                        <div id='groupImageDescription' className='flex'>
                            <div >
                                <img src={ourCard.groupimg}
                                    alt={ourCard.groupname}
                                    id='img'
                                    className='p-6 h-full rounded object-contain shadow-lg w-[22rem] xl:w-[20vw]'
                                />
                            </div>
                            {/* This will display term details */}
                            <div className="m-2">
                                <p className='m-2 text-lg font-serif'>
                                    {ourCard.groupdescription}
                                </p>
                                <p className=" text-xl m-2 text-slate-600" >
                                    <span className="font-medium">
                                        Term :{" "}
                                    </span>
                                    {singleCardDetail.cardname}
                                </p>

                                <p className="text-lg  m-2">
                                    <span className="font-medium">
                                        Defination : {" "}
                                    </span>
                                    {singleCardDetail.carddescription}
                                </p>
                            </div>

                        </div>
                    </div>

                </section>
                <aside className="col-span-1 hidden md:flex flex-col items-center space-y-5">
                    {/*---------------- share  popup window --------------------- */}

                    <div className='flex flex-wrap flex-col' id='buttonDiv'>

                        {/* Share Button with icon */}
                        <div>
                            <button className='flex bg-white py-2 px-4 font-medium rounded
                block w-[90%] m-auto shadow-lg hover:bg-opacity-20'
                                id='button'
                                onClick={() => dispatch(setModal())} >
                                <BsFillShareFill className='mt-1' />
                                <p className='ml-6 '>
                                    Share
                                </p>
                            </button>
                        </div>

                        {/* Download Button with icon */}
                        <div>
                            <button className=' flex bg-white mt-6 py-2 px-4 font-medium rounded block
                w-[90%] m-auto shadow-lg hover:bg-opacity-20'
                                id='button'
                                onClick={handelDownload}>
                                <BsFillCloudDownloadFill className='mt-2 ' />
                                <p className='ml-2 '>
                                    Download
                                </p>
                            </button>
                        </div>

                        {/* Print Button with icon */}
                        <div>
                            <button className=' flex bg-white mt-6 py-2 px-4 font-medium rounded block
                w-[90%] m-auto shadow-lg hover:bg-opacity-20'
                                id='button'
                                onClick={handelPrint}>
                                <BsFillPrinterFill className='mt-1' />
                                <p className='ml-6'>
                                    Print
                                </p>
                            </button>
                        </div>
                    </div>
                    {/* Conditional Rendering on the basis of state of 'modal' */}
                    <div>
                        {
                            modal && (<ModalShare />)
                        }
                    </div>
                </aside>
            </main>


        </section>
    );
};

export default Flashcard;
