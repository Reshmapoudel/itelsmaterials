import { Button } from 'bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../styles.css";
import "./Search.js";
import Search from './Search.js';
import Buttons from './Buttons';
import Navbar from './Navbar';
function Navigation(props){
    return(
    <div>
            <div className="navContainer">
            <img className="icon-img" src="https://ieltsmaterial.com/images/theme/ielts_material_logo.png" alt="img" />
         <Search />
         <Buttons />
      
        </div>
        <Navbar />
    </div>
    )
};
export default Navigation;