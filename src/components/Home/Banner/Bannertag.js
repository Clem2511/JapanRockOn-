import {useTranslation} from 'react-i18next';

function Bannertag(){

    const {t} = useTranslation()

      return ( 
        <div>
            <h1>{t('BANNER_TITLE')}</h1>
            <text>{t('BANNER_TAG')}</text>
        </div>
    )
}

export default Bannertag;