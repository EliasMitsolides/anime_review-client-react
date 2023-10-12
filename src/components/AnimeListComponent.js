import AnimeTableComponent from "../components/AnimeTableComponent";
import AnimeGridComponent from "../components/AnimeGridComponent";

const AnimeListComponent = ({toggle, updateForm, newAnimeTitle, addAnime, deleteAnime, 
    layout, showEditor, animes}) =>

{
    return(
        <div>
            <button onClick={toggle}>Toggle</button>
            <input onChange={(e) => updateForm({
                newAnimeTitle: e.target.value
            })} 
                value={newAnimeTitle}/>
            <button onClick={addAnime}>Add Anime</button>

            {layout === 'table' &&   //Drop the ()'s from function to pass the event handler
            <AnimeTableComponent 
                showEditor = {showEditor}
                animes={animes} 
                deleteAnime={deleteAnime}/>} 
            {layout === 'grid' && 
            <AnimeGridComponent 
                animes={animes} 
                deleteAnime={deleteAnime}/>} 
        </div>)
}
export default AnimeListComponent