//29) Service folders to organize files that talk to servers to manipulate states/get data.
//  ES6 lets you import and export files, the File have become the Module, less name clutter!

const API_URL = "http://localhost:3004/animes";

const findAllAnimes = () => {
    return fetch(API_URL)
        .then(response => response.json())
}

export default findAllAnimes