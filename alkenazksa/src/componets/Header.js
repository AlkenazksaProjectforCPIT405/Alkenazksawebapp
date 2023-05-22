import {Link, Outlet} from "react-router-dom";

export default function Header() {
    return (
        <>
            <nav>
           
            
                        <Link to="/"></Link>
                   
             
            </nav>
            <Outlet />
        </>
        
    )
}