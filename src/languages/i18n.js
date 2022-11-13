import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import translationEN from './english/englishScript';
import translationJP from './japanese/japaneseScript';

//Translation scripts are being imported from their respective folders

i18next.use(initReactI18next)
.init({
    debug: true,
    resources:{
        en:{translation: translationEN},
        jp:{translation: translationJP}
    },
    lng:"en",
    fallbackLng: "en",
    interpolation: {escapeValue: false},
})