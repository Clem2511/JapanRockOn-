import {Link} from "react-router-dom"
import {motion} from "framer-motion";
import {useTranslation} from 'react-i18next';


import ErrorStyle from './ErrorPage.module.css'

function Error() {

    const {t} = useTranslation()

    return (
        <motion.div 
            className={ErrorStyle.divMain}
            initial={{opacity: 0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>

            <div className={ErrorStyle.div}>
                <h1>{t('ERROR_TITLE')}</h1>
                <Link className={ErrorStyle.a} to='/'>{t('ERROR_BUTTON')}</Link>
            </div>
        </motion.div>
    );
}

export default Error;