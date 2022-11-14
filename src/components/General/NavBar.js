import LanguageButton from './LanguageButton.js';

import {Link} from "react-router-dom"
import {useTranslation} from 'react-i18next';

import NavStyle from './NavBar.module.css';

function NavBar(){
    
    const {t} = useTranslation()

    return(
    <div className = {NavStyle.mainDiv}>
        <div className={NavStyle.logoDiv}>
            <h1>JRO!</h1>
        </div>

        <div className={NavStyle.listDiv}>
            <ul className={NavStyle.list}>
                <li><Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} 
                            to="/">{t('NAV_NAME')}</Link></li>
                <li><Link onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}}
                            to="/artists">{t('NAV_ARTISTS')}</Link></li>
                <li><Link to="*">{t('NAV_EVENTS')}</Link></li>
                <li><Link to="*">{t('NAV_STORE')}</Link></li>
                <li><Link to="*">{t('NAV_CONTACT')}</Link></li>
            </ul>
        </div>

        <div className={NavStyle.langDiv}>
            <LanguageButton className={NavStyle.btn} lng={'en'}/>
            <LanguageButton className={NavStyle.btn} lng={'jp'}/>
        </div>
    </div>
    
    );}

export default NavBar;