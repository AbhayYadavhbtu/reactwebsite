import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("Enter Text");
    const Upclick = () => {
        let t = text.toUpperCase();
        setText(t);
    }
    const Downclick = () => {
        let t = text.toLowerCase();
        setText(t);
    }
    const Clearclick = () => {
        let t = "";
        setText(t);
    }
    const RemoveSpaces = () => {
        let t = text.split(/[ ]+/);

        setText(t.join(" "));
    }
    const Change = (e) => {
        setText(e.target.value);
    }

   
    return (
        <>
            <div className="container">
                <h3 className="my-2"> Enter text here</h3>
                <div className="mb-3">

                    <textarea className="form-control" value={text}  style={{backgroundColor: props.mode==='dark'?'grey':'white'}} onChange={Change} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={Upclick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={Downclick} >Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={Clearclick} >Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={RemoveSpaces} >Remove Extra Spaces</button>

                <div div className="container">
                    <p> {text.split(" ").length} words and {text.length} characters</p>

                </div>
            </div>

        </>
    )
}
