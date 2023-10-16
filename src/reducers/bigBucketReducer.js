// 54) Redux: Reducers best go in their own file.

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
// 49) Redux: We can share this state with ALL components. With 'configureStore'.
//  Yarn & package-lock may conflict over item versions, delete them both n package.json can rebuild via npm install
const bigBucketReducer = (state = initialState, action) => {
    return state;
}

export default bigBucketReducer;