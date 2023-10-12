import React from "react";
import BigBucketListComponent from "./BigBucketListComponent";
import MediumBucketListComponent from "./MediumBucketListComponent";
import SmallBucketListComponent from "./SmallBucketListComponent";
import './AnimeEditor.css';
import { Link, useNavigate, useParams } from "react-router-dom";

// 38) Some React users will have 1 .css file for each component, when marking up.
//  Angular forces that convention.

// 24) ()'s are needed when the return will have more than one thing
//  'return's are needed when you're not in an arrow function
// 25) Abstraction of, here, Big Buckets into a component allows parameterization
//  can pass things into a Big Bucket component that I couldn't with just one page
const AnimeEditorComponent = ({hideEditor}) => {
    const { animeID } = useParams();
    const history = useNavigate()
    return  <div>
        {/* <Link to="/">
            Back
        </Link> */}
        <button onClick={() => {history("/")}}>Back</button>
        <h3>Anime Editor {animeID}</h3>
        <button onClick={hideEditor}>Close</button>

        <div className="row">
            <div className="col-4">
                <BigBucketListComponent
                bigBucket={[
                    {_id:"123", title: "CSS"},
                    {_id:"234", title: "HTML"},
                    {_id:"345", title: "React"}
                ]}/>
            </div>
            <div className="col-8">
                <MediumBucketListComponent/>
                <SmallBucketListComponent/>
            </div>
        </div>
    </div>
    
}
    

export default AnimeEditorComponent