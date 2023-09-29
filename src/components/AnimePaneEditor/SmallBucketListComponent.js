import React from 'react';

const SmallBucketListComponent = ({smallBucket}) => 
    <ul>
        <li>Small Bucket 1</li>
        <li>Small Bucket 2</li>
        <li>Small Bucket 3</li>
        {/* {smallBucket.map(eachBucket => 
            <li key={eachBucket._id}>
                {eachBucket.title}
            </li>
        )} */}
    </ul>

export default SmallBucketListComponent