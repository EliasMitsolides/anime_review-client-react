import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// 46) In r-r-d v5, params was a variable auto-passed into React components.
//  Back then, you would do "{match, history}" in the arrow bracket. Which would...
//  ...pass results from URL patterns.
//  In v6, we use hooks like 'useParams()' to get what was passed to us. 
//  'useParams()' will get attrs passed into the component called & from URL parsing.
//  'useNavigate' for what was {history} to programatically navigate pages.
//  Which is to say, perform an algorithm and at the end navigate to diff pages.
//  'useNavigate' represents browser history, as we change URLs, browser will keep...
//  ...that history/list of past URLs for use now.
const Page2 = () => {
    const { message } = useParams(); // this curly braces is Deconstructing. Extracting data.
    // const message = useParams().message; is equivalent
    const history = useNavigate();

    return (
        <div>
            <h1>Page 2 {message}</h1>
            <button onClick={() => {history("/page1")}}>
                Page 1
            </button>
        </div>
        
    )
}


export default Page2