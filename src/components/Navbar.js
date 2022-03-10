import "../styles.css";
import Itelsmod  from "./Itelsmod";
import Itelsmodcom from "./Itelsmodcom";
import {useState} from 'react';
import Onlinecls from "./Onlinecls";
import Videocourse1 from "./Videocourse1";

function Navbar(){
    const [modulesMenuVisible,setmodulesMenuVisible] = useState(false);

    let content = <span />;

    if(modulesMenuVisible === true){
        content = <Itelsmodcom />;
    }
    function showModulesMenu(){
        if(modulesMenuVisible  === false)
        {
            setmodulesMenuVisible(true);
        }
        // else if (modulesMenuVisible === true){
        //     setmodulesMenuVisible(false)
        // }
    }
    function hideModulesMenu(){
        if(modulesMenuVisible === true)
        {
            setmodulesMenuVisible(false);
        }
    }
    return(
        <div className="navbar">
            <ul className="navbar-items">
                <li onMouseEnter={showModulesMenu} onMouseLeave={hideModulesMenu}><Itelsmod name="IELTS Modules"/></li>
               
                <li><Onlinecls  /></li>
                <li><Videocourse1 /></li>
                <li>itels Modules</li>
                <li>itels Modules</li>
                <li>itels Modules</li>
                <li>itels Modules</li>
            </ul>
      
            {content}
        </div>
    )
}
// const datas=[
//    {
//     items: <ul className="navbar-items">
//     <li>itels modules</li>
//     <li>video courses</li>
//     <li>online classes</li>
//     <li>online classes</li>
//     <li>online classes</li>
//     <li>online classes</li>
//     <li>online classes</li>
// </ul>
//    }
// ]
// function Navbar(){
//     const datasUI = datas.map(function(data){
//         return(
//             <div className="navbar">
//                 {data.items}
//             </div>
//         );
//     });
//     return(
//         <div >
//             {datasUI}
//         </div>
//     )
  
// };
export default Navbar;