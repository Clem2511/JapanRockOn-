import Banner from './Banner/Banner';
import Playlist from './playlist/Playlist';
import NavBar from '../General/NavBar';
import HomeStyle from './Home.module.css';

import {motion} from "framer-motion";
import {useTranslation} from 'react-i18next';

import FooterBar from '../General/FooterBar';

function Home(){

    const {t} = useTranslation()

    return (
    <motion.div
        initial={{opacity: 0,}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        transition={{duration:0.25}}>

        <Banner />
        {/*<NavBar/>*/}
        
        <section className={HomeStyle.section}>

            <div className={HomeStyle.feedContainer}>

                <div className={HomeStyle.playlistDiv}>
                    <div className={HomeStyle.h3Div}>
                        <h3><u>{t('HOME_PLAYLIST')}</u></h3>
                </div>


                    <Playlist songs = {t('SONGS', {returnObjects:true})}/>

                </div>

                <div className={HomeStyle.socialDiv}>
                    <div className={HomeStyle.h3Div}>
                        <h3><u>{t('HOME_FOLLOW')}</u></h3>
                    </div>
                    <div className={HomeStyle.news}>
                        <div className={HomeStyle.newsImageContainer}>
                            <img className={HomeStyle.newsImage} src='/images/NewsCris.png'></img>
                            <p>{t('HOME_NEWS1')}</p>
                        </div>

                        <div className={HomeStyle.newsImageContainer}>
                            <img className={HomeStyle.newsImage} src='/images/NewsAwakening.jpg'></img>
                            <p>{t('HOME_NEWS2')}</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className={HomeStyle.filler}></section>
        
        <FooterBar/>

    </motion.div>
    );

}

export default Home;