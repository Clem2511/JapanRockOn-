import Bannertag from './Bannertag';
import BannerStyle from './Banner.module.css';

function Banner(){

    return(
        <div className={BannerStyle.div}>
            <div className = {BannerStyle.sign}> <Bannertag/></div>
        </div>
    );
}

export default Banner;