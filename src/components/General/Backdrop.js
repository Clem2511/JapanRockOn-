import BackdropStyle from './Backdrop.module.css';

function Backdrop({onClick}){
    return(
        <div className={BackdropStyle.div} onClick={onClick}></div>
    )
}

export default Backdrop;