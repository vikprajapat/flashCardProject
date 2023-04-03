.................AlmaBetter Cpastone Frontend Flashcard Generator................

Author : Vikas Prajapat

click on the link to open Flashcard generator ( project)

- https://


How to start this app?
   Git clone or download the Zip format, first run "npm install" to install all the
   dependencies and then run "npm start" to start the server.

   By default App will start on lacalhost:3000.

   In this Project Technologies used
   1. React Js
   2. React-Router-Dom
   3. React-Redux
   4. Redux Toolkit
   5. NanoId
   6. React-Copy-To-Clipboard
   7. React-icons
   8. React-share
   9. Formik Library
   10. Yup Library
   11. jsPDF
   12. Tailwind CSS

This project is created with mainly  Reactjs , In this  project mainly we have three pages 
 ```base
 1) create Flashcard page :- The very first page of the app is create flashcard, 
                             a form will be displayed to create flashcard.
                             In create Flashcard page we used a Formik for creating input boxes and
                             for the validation we used Yup

 2) My Flashcard page :-  For the My flashcard page we saparately  design My Flashcard UI component 
                         and did maping the UI and input data in My flashcard
 
 3) Flashcad Details page  with  share page :- in the page we write a code for displaying Number of
                                               cards and details of cards  and  in the page we also 
                                               created share popup slide  with all social media Links 
 ```
## How To Use 
 
* The very first page of the app is create flashcard, a form will be displayed 
to create flashcard.

* The form is made using formik library and has the validation 
through yup library.

* All the fields are required except images

* User is allowd to upload one image for the group and one image for the term.

* This way app can be used to make upto 20+ flashcards with such limited localstorage of 5MB.

* Once all feilds 'Create' button can be used to add the flashcard details to the local storage.
* '/myflashcard' page will render after the click on 'Create & Go...' button.

* Since we are using redux here so i have tried to not to use props drilling
    rather we will use useSelector hook to get the state.

* On MyFlashCard page we can see all the flashcards created by the user.

* upon click on a flashcard further it will take you to the FlashCardDetail page,
    where we can check with
    1. All the details of the flashcards.
    2. We will have links to other flashcards.
    3. Buttons for share , print , download and team details are available.

* To make print and download button functional, jsPDF library has been used.

* To render the flashcard details on which user clicks, you can use useParams() to get he id from the URL
    and then using filter function we can get the desire flashcard details.

* For validating the formik values, we are using yup library, and the validation schema can
    be found in seprate folder 'validationSchema'                   

* Redux Toolkit is used to create slice and store.
* To make store and slice functional we need to wrap <App/> component in Provider with store

* To call any actions from the store useDispatch() hook is used.
* To get any state from the store useSelector() hook is used.

* Tailwind CSS
    . run npm i -D tailwindcss
    . To configure npm init tailwindcss
    . Then do the recommended changes given on https://tailwindcss.com/docs/installation

* Make sure after configuering the tailwind css your start the server again.


## Features

- Add More Input Box (Button)
- Delete button (Button)
- Edit Input box (Button)
- View cards (Button)
- Upload Image (Button)
- Share (Copy Clipboard  button)
- Social Media Butoon's ( Working )
- See all (Button)
- Back Button 
- close button for closing share page 



## 🛠 Skills
Javascript, HTML, CSS , Reactjs 




