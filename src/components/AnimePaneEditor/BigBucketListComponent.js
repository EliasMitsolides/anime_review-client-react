import React from 'react';
import BigBucketListItem from './BigBucketListItem';
import { connect } from 'react-redux';

// 26) These curly braces in the parameter are ES6 destructuring.
//  When curlies in ES6 aren't being used as method bodies for function, they'll do the above.
// 51) Prepending rendering content with truthies prevents errors if properties...
//  ...not always passed down. E.x. during getting global fsm to feed properties. 
//  By connecting the store & map the parent state's 'bigBuckets' variable to this
//  ...this property 'bigBucket'.
const BigBucketListComponent = ({bigBuckets, createBigBucket}) => 
    <ul>
        {bigBuckets && bigBuckets.map(eachBucket => 
            // <li key={eachBucket._id}>
            //     {eachBucket.title}
            // </li>
            <BigBucketListItem key={eachBucket.id} bigBucketItem={eachBucket}/>
        )}
        <li> {/*Below curlies are JSX, this aint any of ES6 use cases*/}
            <button onClick={createBigBucket}>
                Create
            </button>
        </li>
    </ul>

// 52) Redux: Make a 'bigBuckets' from the states 'bigBuckets'. 
//  By listening to current state passed into this. 
//  Passed FROM the Reducer. State -> property.
//  This technique connects that parent store to THIS component through 'connect()'.
const stateToPropertyMapper = (state) => {
    return {
        bigBuckets: state.bigBuckets
    }
}

// 55) Redux: Dispatch: Use events to tell Reducers of actions & make a new state.
//  Passed TO the Reducer. Property -> state.
const dispatchToPropertyMapper = (dispatch) => {
    return {
        createBigBucket: () => {
            alert('create BIIIIIG BUCKET')
        }
    }
}


// 53) Redux: 'connect()' uses mapper functions to map current things onto this...
//  ...component's properties. Run's mapper, passes the invoking component's state,
//  can pick out what you want mapped into this component as its properties.
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(BigBucketListComponent)