
import {createPortal} from 'react-dom'
const Mainportal= ({children}) => {
   const targetElement = document.getElementById("portal")
   return (
   targetElement ? createPortal(
        children,
        document.getElementById("portal") 
    ) : null

   )
}

export default Mainportal
