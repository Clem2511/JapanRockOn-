import Cardstyle from './Card.module.css';
import ProfileCard from '../ProfileCard/ProfileCard';
import Backdrop from '../../General/Backdrop';
import {useState} from 'react'



function Card ({name, image, discogs, altImage}) {
    
    {//Allows to open/close 'ProfileCard' component when clicking on a card
    }
    const [openProfile, setOpenProfile] = useState(false);

    function profileHandler(){
        setOpenProfile(true);
    }
    function closeHandler(){
        setOpenProfile(false);
    }
    

//individual Card module
    return(
        <div>
            {openProfile && <ProfileCard name = {name} altImage = {altImage} discogs ={discogs} onClick={closeHandler}/>}
            {openProfile && <Backdrop onClick={closeHandler}/>}
            <div className = {Cardstyle.card} onClick={profileHandler}>
                <img className = {Cardstyle.profilePic} src = {`/images/${image}`}></img>
                <h2 className = {Cardstyle.h2}>{name}</h2>
            </div>

        </div>
        

    );
}

export default Card;