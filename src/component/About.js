import React from 'react'

function About(props) {
    return (

        <div className={`m-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2 style={{ textAlign: "center" }}>About Us!</h2>
            <h3 style={{ textAlign: "center" }}>Welcome To <span id="W_Name1">TextUtils</span></h3>
            <p className='m-5'><span id="W_Name2">TextUtils</span> is a Professional Utility Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of Utility, with a focus on dependability and Text Manipulation. We're working to turn our passion for Utility into a booming online website. We hope you enjoy our <span id="W_Type4">Utility</span> as much as we enjoy offering them to you.</p>
            <p className='m-5'>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
                Thanks For Visiting Our Site<br /><br />
                <span style={{ color: "blue", fontSize: " 16px", fontWeight: "bold", textAlign: "center" }}>Have a nice day!</span>
            </p>
        </div>
    )
}

export default About