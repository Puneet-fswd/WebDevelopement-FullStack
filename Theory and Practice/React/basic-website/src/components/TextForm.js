import React, {useState} from 'react';

export default function TextForm(props) 
{
    //declaring event listener functions
    const handleOnChange = (e) =>
    {
        setText(e.target.value);
    }
    const handleUpClick = () =>
    {
        let newText_uc = text.toUpperCase();
        setText(newText_uc);
        props.showAlert('Converted to Upper Case', 'success');
    }
    const handleLowClick = () =>
    {
        let newText_lc = text.toLowerCase();
        setText(newText_lc);
        props.showAlert('Converted to Lower Case','success');
    }
    const handleCopyClick = () =>
    {
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to clipboard!', 'success');
    }
    const handleClearClick = () =>
    {
        let newText_clear = '';
        setText(newText_clear);
        props.showAlert('Space cleared', 'success');
    }
    //declaring a new state variable
    const [text, setText] = useState('');
    return (
        <div>
            <h1 className="heading" style={{color: props.mode==='light'?'black':'skyblue'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} rows="8" style={{backgroundColor: props.mode==='light'?'white':'#343a40', color: props.mode==='light'?'black':'skyblue', border: props.mode==='dark'?'2px solid skyblue':'2px solid black'}} onChange={handleOnChange}></textarea>
            </div>
            <div>
                <button style={{backgroundColor: props.mode==='light'?'black':'#343a40'}} className={`btn btn-dark mx-2 my-2 text-${props.mode==='dark'?'light':'light'} ucbtn`} onClick={handleUpClick}>UPPERCASE</button>
                <button style={{backgroundColor: props.mode==='light'?'black':'#343a40'}} className={`btn btn-dark mx-2 my-2 text-${props.mode==='dark'?'light':'light'} lcbtn`} onClick={handleLowClick}>lowercase</button>
                <button style={{backgroundColor: props.mode==='light'?'black':'#343a40'}} className={`btn btn-dark mx-2 my-2 text-${props.mode==='dark'?'light':'light'} lcbtn`} onClick={handleCopyClick}>Copy text</button>
                <button style={{backgroundColor: props.mode==='light'?'black':'#343a40'}} className={`btn btn-dark mx-2 my-2 text-${props.mode==='dark'?'light':'light'} lcbtn`} onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3">
                <h1 style={{color: props.mode==='light'?'black':'skyblue'}}>Your text summary</h1>
                <p style={{color: props.mode==='light'?'black':'skyblue'}}>{text.split(/\s+/).filter((element)=>{return element.length!=0}).length} words and {text.length} letters</p>
                <p style={{color: props.mode==='light'?'black':'skyblue'}}>Text can be read in: {(text.split(" ").filter((element)=>{return element.length!=0}).length)*0.008} mins.</p>
                <h4 style={{color: props.mode==='light'?'black':'skyblue'}}>Preview</h4>
                <p id="textpreview" style={{color: props.mode==='light'?'black':'skyblue'}}>{text}</p>
                <p style={{color: props.mode==='light'?'black':'skyblue'}}>{text.length>0?text:"Enter some text above to preview it here"}</p>
            </div>
        </div>
    )
}


