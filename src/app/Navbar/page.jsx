import React from 'react';
import Image from "next/image";
import Logo from "../../../assets/logo.png"
const Navbar = () => {
    return (
        <div>

            <div className="navbar bg-base-100 shadow-sm">
                <Image src={Logo} alt="" height={130} width={130}/>
           <div>
    <ul>
        <li> <a href=''>
            Home</a></li>
    </ul>
  </div>
       </div> 
        </div>
    );
};

export default Navbar;