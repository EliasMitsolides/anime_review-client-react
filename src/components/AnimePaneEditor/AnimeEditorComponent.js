import React from "react";
import BigBucketListComponent from "./BigBucketListComponent";
import MediumBucketListComponent from "./MediumBucketListComponent";
import SmallBucketListComponent from "./SmallBucketListComponent";
import './AnimeEditor.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import bigBucketReducer from "../../reducers/bigBucketReducer";

// 38) Some React users will have 1 .css file for each component, when marking up.
//  Angular forces that convention.

// 50) Redux: 'configureStore' will keep track of any state ever created. Store's job.
//  This application level 'store'/'state' can be PROVIDED to rest of app w/ Provider tag.
//  Reducer's manage n create new states, w/ old states as context, that are
//  catalogued and retrievable (undo).
const store = configureStore({
    reducer: bigBucketReducer,
    // preloadedState: initialState
})

// 24) ()'s are needed when the return will have more than one thing
//  'return's are needed when you're not in an arrow function
// 25) Abstraction of, here, Big Buckets into a component allows parameterization.
//  Could pass things into a Big Bucket component that I couldn't with just one page.
// 51) A '<Provider>' will share it's attribute 'store' to all components that are wrapped by it.
//  Provider is specific to React. configureStore can be used in React n other frameworks.
const AnimeEditorComponent = ({hideEditor}) => {
    const { animeID } = useParams();
    const history = useNavigate()
    return <Provider store={store}>
        <div>
        <button onClick={() => {history("/")}}>Back</button>
        <h3>Anime Editor {animeID}</h3>
        <button onClick={hideEditor}>Close</button>

        <div className="row">
            <div className="col-4">
                <BigBucketListComponent animeID={animeID}
                // bigBucket={[
                //     {_id:"123", title: "CSS"},
                //     {_id:"234", title: "HTML"},
                //     {_id:"345", title: "React"}
                // ]}
                />
            </div>
            <div className="col-8">
                <MediumBucketListComponent/>
                <SmallBucketListComponent/>
            </div>
        </div>
    </div>
    </Provider>
    
}
    

export default AnimeEditorComponent