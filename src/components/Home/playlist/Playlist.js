import Player from "./Player";
import PlaylistStyle from "./Playlist.module.css";

//Recieves data from imported 'songs' array of objects, passes it to 'Player' component to generate
//audio players

function Playlist({songs}){
    return(
        <div className={PlaylistStyle.div}>
            {
                songs.map(s => (
                    <Player name={s.name} source={s.source}/>
                ))
            }
        </div>
    );
}

export default Playlist;