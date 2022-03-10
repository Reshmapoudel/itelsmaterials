import Videocourse2 from "./Videocourse2";
import Videocourse3 from "./Videocourse3";
import {useState} from 'react';

function Videocourse1(){
    const [dataThreevisible,setdataThreevisible] = useState(false);
    let content3 = <span />;
    
    if(dataThreevisible === true){
        content3 =  <Videocourse3 />
    }
    function showModulesMenu3(){
        if(dataThreevisible  === false)
        {
            setdataThreevisible(true);
        }
        // else if (modulesMenuVisible === true){
        //     setmodulesMenuVisible(false)
        // }
    }
    function hideModulesMenu3(){
        if(dataThreevisible === true)
        {
            setdataThreevisible(false);
        }
    }
    return(
       <div>
            <div onMouseEnter={showModulesMenu3} onMouseLeave={hideModulesMenu3} ><Videocourse2 />
            
            </div>
           {content3}
       </div>
    )
}
export default Videocourse1;