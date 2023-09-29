import logo from './logo.svg';
import './App.css';
import AnimeManagerContainer from './containers/AnimeManagerContainer';

const App = () =>           //const App = () => {
    <AnimeManagerContainer/>//return (<h1>Hello from App</h1>);
                            //}
    
  // 7) We mix Javascript and HTML here. Usually when JS generating dynamic HTML, we use libraries 
  //    like JQuery, concatenate, use backticks for dynamic HTML. Here Javascript Extension (JSX)
  //    lets us embed Javascript and HTML for easy switching. Usually JS embedded in HTML with 
  //    the whole "script tag...script tag...body tag". Here we're mostly in JS but we'll still
  //    dynamically make HTML. HTML embedded in JS basically here!

  // 8) Also we can use ye typical function declaration. function App() {} 
  //    We can use that or the new syntax...const App = () => {}... allows implicit returns
  //    implicits retursn valid only for one value returns, which this is!
  //    Implicit returns are recognized when the curlies arent used and the => points to the return.
  //    Const is better than let for the syntax bcuz 'const' vars cannot be reassigned

  // 9) Think of components as where information (arrays, variables) can also live. There will
  //    be a flow of components upward so if two different components need the same info that
  //    could be a case where the parent component of those two may be a good place to store
  //    that info whether it be a list, a regular variable, etc. 


export default App;
