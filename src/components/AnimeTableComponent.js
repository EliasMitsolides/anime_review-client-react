import React from "react";
import AnimeRow from "./AnimeRow";

//18) ES6 allows specific extraction. If many things passed into a component...
//  ...you can specify properties params. Need not attirbuteMap.thingOne or ThingTwo
//  When a property name matches up in param, they are made into local variables.
const AnimeTableComponent = ({animes, deleteAnime, showEditor}) =>
    <div>
        {/* 17) Concatenate with {}'s in JS, as blocks, can string together HTML and JS!
        The final result of what's inside JS curlies will be appended to DOM inline.*/}
        <h2>Anime Table Component {animes.length}</h2>
        <ul>
            {
            // 18) Map function iterates over our list we wanna print, calls a function...
            //  ...on each iteration that gives us a reference to each member of the iterable.
            // What's returned from 'map' will be concated iterations.
            // 19) React encourages a 'key' attribute in elements to uniquely identify.
            //  For elements that React will read/write.
            // 20) For components to talk to each other/edit states, pass callback to...
            //  ...child component that it calls to let parent component know 'i frew up'
            animes.map(function(anime, index){
                return (
                    <AnimeRow 
                        anime={anime} 
                        showEditor={showEditor}
                        deleteAnime={deleteAnime}/>
                )
            })
            // 36) This went from a beefy return (<li>asdasd</li>) to an animeRow component that...
            // ...will handle everything in it's own file
            }
            
        </ul>
    </div>
export default AnimeTableComponent