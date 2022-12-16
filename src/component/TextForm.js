import React, { useState } from 'react';
import '../css/TextForm.css';
import { MdOutlineFileCopy } from 'react-icons/md';
import { MdClose } from 'react-icons/md';


export default function TextForm(props) {
    const convertUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted To UpperCase", 'success')
    }

    const convertLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase", 'success')
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Removed", 'success')
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", 'success')

    }

    const removeExtraSpaces = () => {

        setText(text.replace(/\s+/g, ' ').trim())

    }

    const textClick = () => {
        if (text === 'Enter Your Text Here...') {
            setText('')
        }
        else {
            setText(text)
        }
    }



    const [text, setText] = useState('Enter Your Text Here...');

    return (
        <><center><h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h2></center>
            <div className={`container w-75 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id='f'>
                <span className={`fbutton`} id="float"><MdOutlineFileCopy className='icon' onClick={copyText} /> <MdClose className='icon' onClick={clearText} /></span>
                <textarea className={`form-control mb-4 bg-transparent text-${props.mode === 'dark' ? 'light' : 'dark'}`} value={text} onChange={handleOnChange} name="myBox" id="myBox" cols="10" rows="8" onClick={textClick}></textarea>
                <div><center><span style={{ fontWeight: 'bold' }}>Total Words:</span> {text.split(' ')
                    .filter(function (n) { return n !== '' })
                    .length} | <span style={{ fontWeight: 'bold' }}> Total Characters:</span> {text.length}</center></div>
                <center>
                    <button onClick={convertUpperCase} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3 mx-3`}>Convert to UpperCase</button>
                    <button onClick={convertLowerCase} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3 mx-3`}>Convert to LowerCase</button>
                    <button onClick={removeExtraSpaces} className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3 mx-3`}>Remove Extra Spaces</button>
                </center>
            </div></>

    )
}
