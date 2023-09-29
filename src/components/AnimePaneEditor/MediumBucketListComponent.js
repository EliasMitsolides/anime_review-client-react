import React from 'react';

const MediumBucketListComponent = ({mediumBucket}) => 
    <ul>
        <li>Medium Bucket 1</li>
        <li>Medium Bucket 2</li>
        <li>Medium Bucket 3</li>
        {/* {mediumBucket.map(eachBucket => 
            <li key={eachBucket._id}>
                {eachBucket.title}
            </li>
        )} */}
    </ul>

export default MediumBucketListComponent