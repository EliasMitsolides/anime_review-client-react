import React from 'react';
import BigBucketListItem from './BigBucketListItem';
import { connect } from 'react-redux';
import { FIND_ALL_BIGBUCKETS, createBigBucket, deleteBigBucket } from '../../actions/bigBucketActions';
import BigBucketService from '../../services/BigBucketService';

// 26) The curly braces in the parameter are ES6 destructuring.
//  When curlies in ES6 aren't being used as method bodies for function, they'll do the above.
// 51) Prepending rendering content with truthies prevents errors if properties...
//  ...not always passed down. E.x. during getting global fsm to feed properties. 
//  By connecting the store & map the parent state's 'bigBuckets' variable to this
//  ...this property 'bigBucket'.
// 59) React: We know what data we need when a/this component is loaded. 
//  The component being instantiated is an event to be handled, a way to think this.
//  Fetch the data you need! Make this component a React class to use "didMount"...
//  ...which informs when this component is instantiated.
//  this.props.x is how React.Component's use inherited properties vs. destructor.
class BigBucketListComponent extends React.Component {
    //This allows us to handle events that were loaded into this called component.
    //Parent, the REDUCER, will handle those events!
    componentDidMount(){
        //connect(stateToPropertyMapper, dispatchToPropertyMapper) makes it that...
        //...dispatch's functions are passed into this class as properties
        this.props.findBigBucketsForAnime(this.props.animeID);
    }

    render() {
        return(
            <ul>
                {this.props.bigBuckets && this.props.bigBuckets.map(eachBucket => 
                    // <li key={eachBucket._id}>
                    //     {eachBucket.title}
                    // </li>
                    <BigBucketListItem 
                        key={eachBucket.id} 
                        bigBucketItem={eachBucket}
                        deleteBigBucket={this.props.deleteBigBucket}/>
                )}
                <li> {/*Below curlies are JSX, this aint any of ES6 use cases*/}
                    <button onClick={this.props.createBigBucket}>
                        Create
                    </button>
                </li>
            </ul>
        )
        
    }
}
    

// 52) Redux: Make a 'bigBuckets' from the states 'bigBuckets'. 
//  By listening to current state passed into this. 
//  Passed FROM the Reducer (storing reducer functions AND the state). State -> property. 
//  Parent store provided through <Provider> tag & 'connect()' function.
//  This technique connects that parent store to THIS component through 'connect()'.
const stateToPropertyMapper = (state) => {
    return {
        bigBuckets: state.bigBuckets
    }
}

// 55) Redux: Dispatch: Event triggers to tell Reducers of actions & make a new state.
//  Parent store provided through <Provider> tag & 'connect()' function.
//  Passed TO the Reducer. Property -> state. Dispatch calls Reducer through the 'const store'
//  Dispatches MUST PASS one object that has AT LEAST a property w/ 'type' key.
//  That object is PASSED to 'action' in the reducer in the parent store!
//  That object is good convention to put into an 'actions' folder. More clean.
// 58) For server changing, wanna go to server, change it, and then change our...
//  ...state n display, say, successfully added bigBuckets n their generated ids.
// 60) These 'find', 'create', 'delete', server functions can be in 'services' folders.
//  That represents their purpose connecting server data and front-end components.
const dispatchToPropertyMapper = (dispatch) => {
    return {
        findBigBucketsForAnime: (animeID) => 
            BigBucketService.findBigBucketsForAnime(animeID)
                .then(actualBigBuckets =>
                    dispatch({
                        type: FIND_ALL_BIGBUCKETS,
                        bigBuckets: actualBigBuckets
                })),
        createBigBucket: () => {
            // fetch("http://localhost:3004/seasons", {

            // })
            dispatch(createBigBucket({
                title: 'New BigBucket',
                id: (new Date()).getTime()+""
            }))
        },
        deleteBigBucket: (bigBucketId) => 
        BigBucketService.deleteBigBucket(bigBucketId)
        .then(status => dispatch(deleteBigBucket(bigBucketId)))
    }
}

// Naming clashes are irksome if you try \/\/
// deleteBigBucket: (bigBucketId) => ...which deleteBigBucket of locals n imports???
// In folders like 'services' n 'actions', export a default object declaring...
// ...APIs that map. Those can be imported with more specific names.


// 53) Redux: 'connect()' uses mapper functions to map current things onto this...
//  ...component's properties. Run's mapper, passes the invoking component's state,
//  can pick out what you want mapped into this component as its properties.
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(BigBucketListComponent)



// const BigBucketListComponent = ({bigBuckets, createBigBucket, deleteBigBucket}) => 
//     <ul>
//         {bigBuckets && bigBuckets.map(eachBucket => 
//             // <li key={eachBucket._id}>
//             //     {eachBucket.title}
//             // </li>
//             <BigBucketListItem 
//                 key={eachBucket.id} 
//                 bigBucketItem={eachBucket}
//                 deleteBigBucket={deleteBigBucket}/>
//         )}
//         <li> {/*Below curlies are JSX, this aint any of ES6 use cases*/}
//             <button onClick={createBigBucket}>
//                 Create
//             </button>
//         </li>
//     </ul>