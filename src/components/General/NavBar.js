import LanguageButton from './LanguageButton.js';
import {Link} from "react-router-dom"

import {useTranslation} from 'react-i18next';

import NavStyle from './NavBar.module.css';

/*
<li><a href="/">{t('NAV_NAME')}</a></li>
<li><a href="/artists">{t('NAV_ARTISTS')}</a></li>
<li><a href="*">{t('NAV_EVENTS')}</a></li>
<li><a href="*">{t('NAV_STORE')}</a></li>
<li><a href="*">{t('NAV_CONTACT')}</a></li>
*/


function NavBar(){
    
    const {t} = useTranslation()

    return(
    <div className = {NavStyle.mainDiv}>
        <div className={NavStyle.logoDiv}>
            <h1>JRO!</h1>
        </div>

        <div className={NavStyle.listDiv}>
            <ul className={NavStyle.list}>
                <li><Link to="/">{t('NAV_NAME')}</Link></li>
                <li><Link to="/artists">{t('NAV_ARTISTS')}</Link></li>
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