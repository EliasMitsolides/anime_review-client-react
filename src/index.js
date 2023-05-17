import React from 'react';
import ReactDOM from 'react-dom/client';
//4) /\/\Where actual DOM and React meet. DOM represents what renders on the screen.
        //ReactDOM ties that DOM to the low-level react.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 2) Import is new in CSS6, lets us export and input from self-contained modules. 
//    Solved JS' problem of having a single namespace where collisions are possible. Only what's
//    implicitly imported can have a potential collision, so we can change the 'import as' name!
// 3) Imports n such new features aren't supported by allll browsers. A concern! Since JQuery 
//    standardizes. But React will indirectly standardize through 'transpilers'. High level 
//    language turned into low level language that all browsers are cool with.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 5) ReactDOM has a function, render that takes an arg which binds to the variable root 
//    find an element from the DOM whose ID is 'root' which here is in index.html
//    That's how React knows WHERE to input all this content. WHAT is injected is the 
//    thing passed into the render() function, in this case...'<App/>'!!!
// 6) This 'App' is imported from another file. In that file it is a function! 
//    What's returned from that App is what gets rendered.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
