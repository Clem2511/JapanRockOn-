import {useEffect} from "react";
import {useLocation} from "react-router-dom";

function ScrollToTop(){
    const {pathname} = useLocation();
 

useEffect(() => {

  //set timeout to coordinate scroll to top with transition animation
  setTimeout(function(){window.scrollTo(0, 0);},150);
  }, [pathname]);

  return null;
}

export default ScrollToTop;