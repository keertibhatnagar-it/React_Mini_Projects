import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.l og("Uppercase clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("handleOnChange clicked");
        setText(event.target.value);
    }

    
    const[text,setText]=useState('Enter text here');
    return (
        <div className="mb-3">
        <div className="container">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
            
            <button className="btn btn-primary my-4"  onClick={handleUpClick}>Convert to Uppercase</button>
            </div> 
            </div>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter your heading here"
}