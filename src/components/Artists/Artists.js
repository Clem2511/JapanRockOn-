import NavBar from "../General/NavBar";
import Board from "./Card/Board";
import ArtistsStyle from "./Artists.module.css";

import {useTranslation} from 'react-i18next';

import FooterBar from "../General/FooterBar";


//Imported 'profiles' array of objects passes data for 'Board' component to map into multiple cards.

function Artists() {

    const {t} = useTranslation()

    return (
   
    <div className = {ArtistsStyle.div}>

        <NavBar/>
        <div className = {ArtistsStyle.boardContainer}>
        <Board profiles={t('PROFILES', {returnObjects:true})}/>
        </div>
        <FooterBar/>
    </div>
    );
}


export default Artists;