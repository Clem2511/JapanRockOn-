import {useTranslation} from 'react-i18next';
import tagStyle from './BannerTag.module.css'


function Bannertag(){

    const {t} = useTranslation()

      return ( 
        <div className={tagStyle.div}>
            <h1>{t('BANNER_TITLE')}</h1>
           <div className={tagStyle.text}><text>{t('BANNER_TAG')}</text></div> 
        </div>
    )
}

export default Bannertag;