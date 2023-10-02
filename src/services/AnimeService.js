// 31) the {} syntax is a Destructor syntax. 'import' from non-'default export'... 
// is one big object. The curlies in this case grabs from part of that object.
import { ANIME_SHOWS_AND_MOVIES_URL } from "../constants";

// 29) Service folders to organize files that talk to servers to manipulate states/get data.
//  ES6 lets you import and export files, the File have become the Module, less name clutter!

const API_URL = ANIME_SHOWS_AND_MOVIES_URL;

// 32) we'll turn "const findAllAnimes" into "export const findAllAnimes" as we want many exports.
// 33) Fetches are async. Otherwise the fetch would return a local variable. Then do a...
//  ... .json() on that variable. And would need the method brackets to do a 'return' on 2+ lines.

export const findAllAnimes = () => {
    return fetch(API_URL) // fetch does not block, the .then & callback commences when fetch done
        .then(response => response.json())
}
// 34) Async await, what's important is that we can write code with it that looks sequential and...
//  ...left to right and up to down, even though it actually isnt. 
//  Can alternatively use the '.then' format.
// 35) Tag function as 'async' and tag the promise function with an 'await'. 
//  Wraps whole function as promise and lets us write in sequential logic.
//  Both works as fetches asre asyncs
// export const findAllAnimes = async () => {
//     const response = await fetch(API_URL)
//         return await response.json()
// }

export const deleteAnime = async (animeID) => {
    const response = await fetch(`${API_URL}/${animeID}`, {
        method: 'DELETE'  
    })
    return await response.json() 
}
// export const deleteAnime = (animeID) => {   
//     return fetch(`${API_URL}/${animeID}`, {
//         method: 'DELETE'       
//     }).then(response => response.json())
// }

export const createAnime = (animeToCreate) =>
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(animeToCreate), // must make a JSON string for the 'body' property
        headers: {
            'content-type': 'application/json' // let server know content is JSON
        }
    }).then(response => response.json()) // server responds with actual body, we parse it into JSON