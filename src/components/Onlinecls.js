import { useState } from "react";
import Onlinecls1 from "./Onlinecls1";
import Onlinecom from "./Onlinecom";
function Onlinecls(){
    const [dataTwovisible,setdataTwoVisible] = useState(false);
    let content2 = <span />;

    if(dataTwovisible === true){
        content2 =  <Onlinecom />;
    }
    function showModulesMenu2(){
        if(dataTwovisible  === false)
        {
            setdataTwoVisible(true);
        }
        // else if (modulesMenuVisible === true){
        //     setmodulesMenuVisible(false)
        // }
    }
    function hideModulesMenu2(){
        if(dataTwovisible === true)
        {
            setdataTwoVisible(false);
        }
    }
    return(
        <div>
            <span onMouseEnter={showModulesMenu2} onMouseLeave={hideModulesMenu2}> <Onlinecls1 /></span>
           
            
           {content2}
          
        </div>
    )
}
export default Onlinecls;