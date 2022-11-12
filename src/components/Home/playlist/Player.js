import PlayerStyle from './Player.module.css';

//Individual 'Player' module

function Player({name, source}){


    return(
        <div className={PlayerStyle.div}>
            <h3 className={PlayerStyle.h3}>{name}</h3>
            <audio className={PlayerStyle.audio} controls  src={`/music/${source}`} title={name}></audio>
        </div>
    );
}


export default Player;