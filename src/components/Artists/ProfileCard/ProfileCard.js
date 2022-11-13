import ProfileStyle from './ProfileCard.module.css';


//Recieves data from 'Card' component

function ProfileCard({name, altImage, description, genres, discogs, onClick}){
    return (

            
        <div className={ProfileStyle.mainDiv}>

                <div className={ProfileStyle.imageDiv}>
                    <img className={ProfileStyle.img} src = {`/images/${altImage}`}></img>
                </div>

                <div className={ProfileStyle.contentDiv}>
                    
                    <div className={ProfileStyle.titleDiv}>
                        <div></div>
                        <div className={ProfileStyle.h1Div}><h1>{name}</h1></div>
                        <div className={ProfileStyle.x} onClick={onClick}>X</div>
                    </div>
                    <div className={ProfileStyle.textDiv}>
                        <text>{description}</text>
                        <text>{genres}</text>
                    </div>
                    <div className={ProfileStyle.discogsDiv}>
                            <a target="_blank" rel="noreferrer"href={discogs} className={ProfileStyle.a}>
                                <h3>GO TO DISCOGS!</h3>
                            </a>
                    </div>
                </div>
        </div>
        
            
    )
}

export default ProfileCard;