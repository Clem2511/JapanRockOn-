import NavBar from "../General/NavBar";
import Board from "./Card/Board";
import ArtistsStyle from "./Artists.module.css";

import {motion} from "framer-motion";
import {useTranslation} from 'react-i18next';

import FooterBar from "../General/FooterBar";


//Imported 'profiles' array of objects passes data for 'Board' component to map into multiple cards.

function Artists() {

    const {t} = useTranslation()

    return (
   
    <motion.div 
        className = {ArtistsStyle.div}
        initial={{opacity: 1}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.25}}>

        <NavBar/>
        <div className = {ArtistsStyle.boardContainer}>
        <Board profiles={t('PROFILES', {returnObjects:true})}/>
        </div>
        <FooterBar/>

    </motion.div>
    );
}


export default Artists;