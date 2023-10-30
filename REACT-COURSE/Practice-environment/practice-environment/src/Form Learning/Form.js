import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const Form = () => {
    
    const [userInput, setUserInput] = React.useState("");
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
        setIsSubmitted(false);
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };


    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Enter Text Here: </label>
                <input type="text" name="username" className="input" onChange={handleUserInput}/>
                <button>Submit</button>
            </div>

            {isSubmitted ? <div>{userInput}</div> : ""}
            {/* <div className="result">{userInput}</div> */}

        </form>
    );
}

export default Form;