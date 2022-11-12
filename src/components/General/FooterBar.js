import FooterStyle from './FooterBar.module.css';

function FooterBar(){
    return(
        <div className={FooterStyle.divMain}>
            <div className={FooterStyle.div1}>

                <ul>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/clemente-astudillo-163a57255/">
                    <li className={FooterStyle.linkedin}>
                        <img className={FooterStyle.img} src='/images/Linkedin.png'></img>
                        My Linkedin
                    </li></a>

                    <li>clemast2511@gmail.com</li>
                </ul>

            </div>

            <div className={FooterStyle.div2}>
                ☆⌒ヽ('､^ )chu
            </div>

        </div>
    );
}

export default FooterBar;