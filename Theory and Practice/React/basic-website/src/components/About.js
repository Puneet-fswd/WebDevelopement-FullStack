import React from 'react'

export default function About(props) 
{
  return (
    <div className="container my-3">
        <h1 style={{color: props.mode==='light'?'black':'skyblue'}} className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'black'}}>
                <h2 className="accordion-header" id="headingOne" style={{border: props.mode==='light'?'1px solid black':'1px solid skyblue'}}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'skyblue'}}>
                        About TextUtils 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color: props.mode==='light'?'black':'skyblue'}}>
                        <strong>This is a text customisation website.</strong> This website can be used for varying purposes of students and working proffessionals in their daily text needs. This can enhance their projects and presentations removing manual effort and also saving their time.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'black'}}>
                <h2 className="accordion-header" id="headingOne" style={{border: props.mode==='light'?'1px solid black':'1px solid skyblue'}}>
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'skyblue'}}>
                        Free to use 
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color: props.mode==='light'?'black':'skyblue'}}>
                        <strong>This website is absolutely free to use</strong> This page give instant word and character count to the text entered by the user and also a solution to all your word modification needs.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor: props.mode==='light'?'white':'black'}}>
                <h2 className="accordion-header" id="headingTwo" style={{border: props.mode==='light'?'1px solid black':'1px solid skyblue'}}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'skyblue'}}>
                        Founder 
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{color: props.mode==='light'?'black':'skyblue'}}>
                        <strong>Our founder is Puneet Amrutkar</strong>
                        <p>A tech enthusiast, who loves to use technology for the upliftment of the society and community</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
