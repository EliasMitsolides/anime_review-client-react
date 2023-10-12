import React from "react";
import { updateAnime } from "../services/AnimeService";
import { Link } from "react-router-dom";

class AnimeRow extends React.Component { //  = ({anime, showEditor, deleteAnime}) => 
    // 40) The map of values are stored in this parent constructor & passed into super.
    //  Without a super(props), usage of 'this.props.someVar' can be buggy.
    // 41) Sometimes when properties first loaded, making an initial state with their values.
    //  Allows locally mutating those properties that were passed to components.
    constructor(props) {
        super(props);
    }
    state = {
        editing: false,
        anime: this.props.anime
    }
    // 37) To get passed down properties, can access them through this.props
    render() {
        return(
            <li>
            {this.state.editing === false && 
            //To use the anime ID in the Link's 'to' attribute, can append through JS...
            // ...functionality with the JSX curly braces and JS template literals...
            // ...as the alternative to typical + + + string concatenation ${expression}
            <Link to={`/anime-editor/${this.props.anime.id}`}>
                {this.state.anime.title} 
            </Link>}
            
            {this.state.editing && 
            <input 
                onChange={(e) => this.setState({
                    anime: {
                        ...this.state.anime,
                        title: e.target.value
                    }
                })}
                value={this.state.anime.title}
            />}
            
            <button onClick={() => this.props.deleteAnime(this.props.anime)}>Delete</button>
            
            <button onClick={() => {
                this.setState({
                    editing: true
                })
            }}>Edit</button>

            <button onClick={() => {
                // 42) Doing a .then into ignoring the response object lets us use asyncs.
                //  If we really do not care for the response and just want the action.
                updateAnime(this.state.anime.id, this.state.anime).then(status => {})
                this.setState({
                    editing: false
                })
            }}>Save</button>
        </li>
        )
    }
}
    



export default AnimeRow