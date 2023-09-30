import React from "react";

class AnimeRow extends React.Component { //  = ({anime, showEditor, deleteAnime}) => 
    state = {
        editing: false
    }
    // 37) To get passed down properties, can access them through this.props
    render() {
        return(
            <li>
            {this.state.editing === false && <a onClick={this.props.showEditor} href="#">
                {this.props.anime.title} 
            </a>}
            {this.state.editing && <input/>}
            <button onClick={() => this.props.deleteAnime(this.props.anime)}>Delete</button>
            <button onClick={() => {
                this.setState({
                    editing: true
                })
            }}>Edit</button>
            <button onClick={() => {
                this.setState({
                    editing: false
                })
            }}>Save</button>
        </li>
        )
    }
}
    



export default AnimeRow