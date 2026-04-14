'use client';
import React,{ useState } from 'react';
import Image from "next/image";
import Logo from "../../../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import Link from 'next/link';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    return (
        

           
          <div className="navbar  bg-base-100 shadow-sm  sm:flex justify-between ">
            <Image src={Logo} alt="logo" height={140} width={140} className='w-40 h-auto ml-2 sm:ml-15'/>

        
         <div className='flex mr-1  sm:mr-15'>


        <button onClick={() => setActiveTab('home')} className={`flex items-center gap-1 px-1 sm:px-3 py-1 rounded transition-colors ${
                        activeTab === 'home' ? 'bg-green-900 text-white font-bold' : 'text-gray-500'
                    }`}
                >
            <Link href=''  className='flex justify-center items-center gap-0.5 '>  <RiHome2Line />  Home</Link></button>
        

        <button onClick={() => setActiveTab('timeline')} className={`flex items-center gap-1 px-1 sm:px-3 py-1 rounded transition-colors ${
                        activeTab === 'timeline' ? 'bg-green-900 text-white font-bold' : 'text-gray-500'
                    }`}
                > 
            <Link href=''  className='flex justify-center items-center gap-0.5 '>  <IoTimeOutline /> Timeline</Link></button>
        
        
        <button onClick={() => setActiveTab('stats')} className={`flex items-center gap-1  px-1 sm:px-3 py-1 rounded transition-colors ${
                        activeTab === 'stats' ? 'bg-green-900 text-white font-bold' : 'text-gray-500'
                    }`}
                > 
            <Link href=''  className='flex justify-center items-center gap-0.5 '>  <GoGraph />  Stats</Link></button>

                   
        </div>


</div>
         
  
      
    );
};

export default Navbar;