// Redux: Hard-coded strings for 'actions' in reducers are safer as enums.
//  Enums work or don't work, can't misspell them.
export const FIND_ALL_BIGBUCKETS = "FIND_ALL_BIGBUCKETS"

export const CREATE_BIGBUCKET = "CREATE_BIGBUCKET"

export const createBigBucket = (newBigBucket) => (
    {
        type: CREATE_BIGBUCKET,
        newBigBucket: newBigBucket
    }
)

export const DELETE_BIGBUCKET = "DELETE_BIGBUCKET"

export const deleteBigBucket = (bigBucketId) => (
    {
        type: DELETE_BIGBUCKET,
        bigBucketId: bigBucketId
    }
)