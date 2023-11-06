// 61) Naming clashes are irksome if you try \/\/
// deleteBigBucket: (bigBucketId) => ...which deleteBigBucket of locals n imports???
// In services, export a default object declaring APIs that map.
// Those can be imported with more specific names.

export const findBigBucketsForAnime = (animeID) => 
    fetch(`http://localhost:3004/animes/${animeID}/seasons`)
        .then(response => response.json())//once we actually have BigBuckets

export const findAllBigBuckets = () => 
    fetch("http://localhost:3004/seasons")
        .then(response => response.json())//once we actually have BigBuckets

export const deleteBigBucket = (bigBucketID) => 
    fetch(`http://localhost:3004/seasons/${bigBucketID}`, {
        method: "DELETE"
    }).then(response => response.json())

export default {//if key and value are the same, ES6 has a sugar letting one word
    findAllBigBuckets, // is same as findAllBigBuckets: findAllBigBuckets
    deleteBigBucket: deleteBigBucket,
    findBigBucketsForAnime
}