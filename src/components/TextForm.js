import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.l og("Uppercase clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
    }
    const handleLowClick=(event)=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleInverseClick=()=>{
        let newText='';
        // for(let i=0;i<text.length;i++){
        //     if (text[i]===text[i].toUpperCase()){
        //        newText=text[i].toLowerCase();
        //     }else if(text[i]===text[i].toLowerCase() ){
        //         newText=text[i].toUpperCase();
        //     }

        
        console.log(text.split(""));
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
}
    const handleOnChange=(event)=>{
        // console.log("handleOnChange clicked");
        setText(event.target.value);
    }
    
    
    const[text,setText]=useState('Enter text here');
    return (
        <>
        <div className="container my-4" style={{color:props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white'}} value={text} id="myBox" rows="8"></textarea>
            
            <button className="btn btn-primary my-4 mx-2"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-4 mx-2"  onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-4 mx-2"  onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary my-4 mx-2"  onClick={handleInverseClick}>Inverse Case</button>
            <button className="btn btn-primary my-4 mx-2"  onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-4 mx-2"  onClick={handleExtraSpaces}>Cut Extra Spaces</button>

            </div> 
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008* text.split(" ").length} Minutes read</p>
                <h2>Preview Text</h2>
                <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
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