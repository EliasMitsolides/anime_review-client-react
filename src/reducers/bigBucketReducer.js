// 54) Redux: Reducers best go in their own file.
// 57) Redux: Hard-coded strings for 'actions' in reducers are safer as enums.
//  Enums work or don't work, can't misspell them.
//  Good convention to put them in an 'actions' folder.

import { CREATE_BIGBUCKET, DELETE_BIGBUCKET, FIND_ALL_BIGBUCKETS } from "../actions/bigBucketActions";

const initialState = {
    stateVariable1: {},
    bigBuckets: [
        {id:"123", title: "CSS"},
        {id:"234", title: "HTML"},
        {id:"345", title: "React"}
    ]
}

// 48) Redux: 'Reducers' utilizer an inital state AND a new action to calculate new...
//  ...states going to interested components. 
//  With actions as objects, consistent values can help craft new states.
// 49) Redux: We can share this state with ALL components. With 'configureStore'.
//  Yarn & package-lock may conflict over item versions, delete them both n package.json can rebuild via npm install.
// 56) Creating n' returning a new state runs the '<Provider>' again,... 
//  reruns connect()s again, reruns "Mappers" again which returns changed bigBuckets,
//  ...and that changed bigBuckets is mapped into the bigBucketComponent properties!
const bigBucketReducer = (state = initialState, action) => {
    switch(action.type) {
        case FIND_ALL_BIGBUCKETS:
            return {
                bigBuckets: action.bigBuckets
            }
        case CREATE_BIGBUCKET:
            console.log('sdfsdfsdf')
            return {
                bigBuckets: [
                    ...state.bigBuckets,
                    action.newBigBucket
                ]
            }
        case DELETE_BIGBUCKET:
            return {
                bigBuckets: state.bigBuckets.filter(
                    bigBucketsToKeep => bigBucketsToKeep.id !== action.bigBucketId
                )
            }
        default:
            return state;

    }
}

export default bigBucketReducer;