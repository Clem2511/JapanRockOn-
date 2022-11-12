import {Link} from "react-router-dom"
import {useTranslation} from 'react-i18next';

import ErrorStyle from './ErrorPage.module.css'

function Error() {

    const {t} = useTranslation()

    return (
        <div className={ErrorStyle.divMain}>

            <div className={ErrorStyle.div}>
                <h1>{t('ERROR_TITLE')}</h1>
                <Link className={ErrorStyle.a} to='/'>{t('ERROR_BUTTON')}</Link>
            </div>
        </div>
    );
}

export default Error;