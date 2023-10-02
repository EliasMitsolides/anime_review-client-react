import React from 'react';
import BigBucketListItem from './BigBucketListItem';

// 26) Again, these curly braces are JS resolving + returning whats passed into it.
//  When curlies in JS aren't being used as method bodies for function, they'll do the above.
const BigBucketListComponent = ({bigBucket}) => 
    <ul>
        {bigBucket.map(eachBucket => 
            // <li key={eachBucket._id}>
            //     {eachBucket.title}
            // </li>
            <BigBucketListItem key={eachBucket.id} bigBucketItem={eachBucket}/>
        )}
    </ul>

export default BigBucketListComponent