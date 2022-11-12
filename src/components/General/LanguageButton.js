import i18next from 'i18next';
import buttonStyle from './LanguageButton.module.css'

function LanguageButton({lng}){
    return(
        <button className={buttonStyle.btn} type="submit" key={lng} onClick={()=>i18next.changeLanguage(lng)}>
            {lng}
        </button>
    )    
}

export default LanguageButton;