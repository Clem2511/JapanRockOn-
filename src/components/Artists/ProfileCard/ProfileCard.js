import ProfileStyle from './ProfileCard.module.css';


//Recieves data from 'Card' component

function ProfileCard({name, altImage, discogs, onClick}){
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
                        <text> 
                        hey what's up my name is jeff and i like j-rock and all that stuff
                        how are you doing this is not really a sentence that makes sense
                        or has meaning i just need to write some stuff down so i'm typing
                        as i go thinking about words on the way konnichiha nihongo ga jouzu desune
                        </text>
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