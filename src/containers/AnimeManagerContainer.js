import React from "react";
import AnimeTableComponent from "../components/AnimeTableComponent";
import AnimeGridComponent from "../components/AnimeGridComponent";
import AnimeEditorComponent from "../components/AnimePaneEditor/AnimeEditorComponent"
import {findAllAnimes, deleteAnime, createAnime} from "../services/AnimeService";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AnimeListComponent from "../components/AnimeListComponent";
// 43) BrowserRouter specifies an area where for browser navigation implementation.
// 44) Route used to have a 'component' attribute that's now 'element'. Requires...
//  ... a variable (JS through JSX curlies). Also in r-r-d v6 is 'Routes' components
//  ... to use over 'Switch' components. Use 'component' only if in RouterProvider parent element.

// 11) Components as functions or classes?. Easier to maintain n test functions.
//  Buuut if we want to easily remember things, states, use a CLASS.
//  If we wanna stick with functions there be hooks to use, a lil complicated.

// const AnimeManagerComponent = () => 
//     <div>
//         <h1>Anime Manager</h1>
//         <button>Toggle</button>
//         {true && <AnimeTableComponent/>} 
//         {/* 10) Curly brackets {}s group together code in blocks & statements, nice rendering logic*/}
//         {false && <AnimeGridComponent/>} 
//     </div>

// 12) JS is an Object-Orientated-Language and thus we can use extends, while using ideas like
//      polymorphism, encapsulation, and inheritence. 
//      This christened React component  will need to override some inherited functions...render!
// 23) Containers are Components that have a mix of states, event handlers.
// 30) The React.Component we inherit from have lifecycle functions. When we're being made n' destroyed.
//      componentDidMount is a method for set states for new component instances.
class AnimeManagerContainer extends React.Component {
    // 13) 'state' variables in React components are no ordinary variable ctrl + click on that 
    //      'state' to see that it's got special properties and such. It's inherited.
    //      Handy to put an "initial" state.
    state = {
        layout: 'table',
        showEditor: false,
        newAnimeTitle: "Mama Luigi",
        animes: [
            {_id: '123', title: 'Anime A'},
            {_id: '234', title: 'Anime B'},
            {_id: '345', title: 'Anime C'},
            {_id: '456', title: 'Anime D'}
        ]
    }

    //componentDidMount async () => {
        //// If this were async
        //const retrievedAnimes = await findAllAnimes()
        //this.setState({
        //  animes: retrievedAnimes
        // })
        //}
    componentDidMount(){
        findAllAnimes()
            .then(retrievedAnimes => this.setState({
                animes: retrievedAnimes
            }))
    }

    //14) 'const', 'let', and 'var' NOT USABLE in classes, use arrow for functions
    // const toggle = function () {
    //     alert("toggle")
    // }
    //15) React maintains a virtual DOM where all updates changes, real DOM updates are expensive.
    //  this.setState triggers a re-rendering...is how React knows to refresh virtual DOM
    //  the curly brackets indicate a codeblock for this arrow function, gotta explicitly return
    //16) .prevState() knows to only change what's returned into our 'state' variable.
    toggle = () => this.setState(prevState => {
        if (prevState.layout === 'table'){ // === means equal with no type changing
            return ({ //it goes ({ }) bcuz we want to return the {} object itself
                layout: 'grid'
            })
        }
        else{
            return ({
                layout:'table'
            })
        }
         
    })

    //22) When passing this down to the table/grid components we only need pass a reference 
    //...to an 'event handler' to this function. Event handler means this won't fire UNTIL...
    ///...some specific thing happens. In this case an onClick button event.
    //When passing functions down components we trust it'll be used properly.
    deleteAnime = (animeToDelete) => {
    deleteAnime(animeToDelete.id)
        .then(findAllAnimes()
            .then(retrievedAnimes => this.setState({
                animes:retrievedAnimes
            }))
        )


        // .then(status => {
        //     this.setState(prevState =>  {
        //         return {
        //             animes: prevState
        //                 .animes
        //                 .filter(eachAnime => eachAnime.id !== animeToDelete.id)
        //                 // .filter(function(eachAnime){
        //                 //     return eachAnime.title !== anime.title
        //                 // })
        //         }
        //     })
        // })
    }
    // deleteAnime = async (animeToDelete) => 
    // {
    //     const deletedAnime = await deleteAnime(animeToDelete.id);
    //     this.setState(prevState =>  {
    //         return {
    //             animes: prevState
    //                 .animes
    //                 .filter(eachAnime => eachAnime.id !== animeToDelete.id)
    //         }
    //     })
    // }
    
    

    addAnime = () => 
    createAnime({
        title: this.state.newAnimeTitle
    }).then(createdAnime => this.setState(prevState => {
        return ({// the '...' is a spread operator
            animes: [
                ...prevState.animes, 
                createdAnime
            ] 
        })
    }))
    
    //27) This setState usage doesn't have a callback in its param. State history here isn't needed.
    // 39) Redux.js and hooks fix "drilling". Passing functionalities down and up components.
    showEditor = () => 
        this.setState({
            showEditor: true
        })

    hideEditor = () => 
        this.setState({
            showEditor: false
    })

    // 28) React is built on top of JQuery (which is built on JS) and other librareis letting us
    // embed HTML in JavaScript. Angular doesn't play as well with JQuery. 
    // JQuery updates actual DOM, React updates virtual DOM. When those differ the two communicate.
    updateForm = (newState) => {
        this.setState(newState)
    }
    

    //Whatever React's 'render' would return is overriden by what's typed in the JS return.
    //render is one of many lifecycle functions that React calls at diff points in component activity.
    // 15) Provide only a reference to a function we want used in render. 
    //    If arguments and thus parenthesis are needed, put it in a lambda.
    // 16) While calling a component for React, you can pass references to state variables
    //      into that call. That component will have what it needs thanks to parent component.
    // 21) React events are written in camelCase, unlike HTMLs all lowercase...onClick<->onclick
    //      arguments in React event handlers need arrowfunctions...it fires
    // 45) React-Router-DOM's Router n stuff listens for changes in URL and changes what...
    //  ...we should see based on the URL changes. URL encoding allows state reconstruction!
    render(){
        return (
            <div>
                <h1>Anime Manager</h1>
                {/* <Router>
                    <Link to="/page1">
                        Page 1
                    </Link>
                    <Link to="/page2">
                        Page 2
                    </Link>
                    <Routes>
                        <Route path="/page1" element={<Page1/>}/>

                        <Route path="/page2" element={<Page2/>}>
                            <Route path="/page2/:message" element={<Page2/>}/>
                        </Route>
                    </Routes>
                </Router> */}

                    <AnimeEditorComponent hideEditor = {this.hideEditor}/>
               
                    
                    <AnimeListComponent
                    toggle={this.toggle}
                    updateForm={this.updateForm}
                    newAnimeTitle={this.state.newAnimeTitle}
                    addAnime={this.addAnime}
                    deleteAnime={this.deleteAnime}
                    layout={this.state.layout}
                    showEditor={this.showEditor}
                    animes={this.state.animes}/>
                

                
            </div>
        )
    }

}

export default AnimeManagerContainer