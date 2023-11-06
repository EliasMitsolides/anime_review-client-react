import React from "react";


// Closures, when you put a called function in front of a '() => functiony()',
//  ensure the function only happens when some event happens that triggers...
//  ...in this case, 'onClick'
const BigBucketListItem = ({bigBucketItem, deleteBigBucket}) => 
    <li>
        {bigBucketItem.season_number}
        <button onClick={() => deleteBigBucket(bigBucketItem.id)}>
            Delete
        </button>
    </li>

export default BigBucketListItem