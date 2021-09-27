import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.l og("Uppercase clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("handleOnChange clicked");
        setText(event.target.value);
    }
    
    
    const[text,setText]=useState('Enter text here');
    return (
        <>
        <div className="container my-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            
            <button className="btn btn-primary my-4 mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-4 mx-2"  onClick={handleLowClick}>Convert to Lowercase</button>

            </div> 
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h2>Preview Text</h2>
                <p>{text}</p>
            </div>
            </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter your heading here"
}