import {Link, Outlet} from "react-router-dom";
import Navbar from "../pages/Navbar";

export default function Header() {
    return (
        <>
        <body>
    
           
           <div>
           <Link to="/"></Link>
           </div> 
           <div>
            <Link to={Navbar}></Link>
           </div>
          

           
           

        </body>
         
         
                   
            <Outlet />
        </>
        
    )
}