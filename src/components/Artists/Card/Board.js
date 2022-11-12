import Card from "./Card";
import BoardStyle from "./Board.module.css";


//Displays many cards based on input recieved by 'profiles' array of objects.

function Board({profiles}){

    return(
        <div className={BoardStyle.cardContainer}>
            {
                profiles.map(p => (
                    <Card image = {p.image} altImage={p.altImage} name = {p.name} discogs = {p.discogs}/>
                ))
            }
        </div>
    )
}

export default Board;