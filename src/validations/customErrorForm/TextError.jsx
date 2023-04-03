// this components is displaing the input text error in the createflashcard
// page this will access the input namevalue and coording to the name value this will

import React from 'react'

const TextError = (props) => {
    return (
        <div className='text-sm text-red-500'>{props.children}</div>
    )
};

export default TextError;