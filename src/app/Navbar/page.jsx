'use client';
import React,{ useState,useEffect } from 'react';
import NextImage from "next/image";
import Logo from "../../../assets/logo.png"
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            setActiveTab('home');
        } else if (pathname === '/timeline') {
            setActiveTab('timeline');
        } else if (pathname === '/stats') {
            setActiveTab('stats');
        } else {
             setActiveTab('');
        }
    }, [pathname]);

    
    return (
        
          <div className="navbar  bg-base-100 shadow-sm  sm:flex justify-between ">
            <NextImage src={Logo} alt="logo" height={140} width={140} className='w-40 h-auto ml-2 sm:ml-8 md:ml-15'/>

        
         <div className='flex mr-1  sm:mr-8  md:mr-25'>


        <button onClick={() => setActiveTab('home')} className={`flex items-center gap-1 px-1 sm:px-3 py-1 rounded transition-colors ${
                        activeTab === 'home' ? 'bg-green-900 text-white font-bold' : 'text-gray-500' }`}>
            <Link href='/' className='flex justify-center items-center gap-0.5 '>
                        <RiHome2Line /> Home</Link></button>  
                              

        <button onClick={() => setActiveTab('timeline')} className={`flex items-center gap-1 px-1 sm:px-3 py-1 rounded transition-colors ${
                        activeTab === 'timeline' ? 'bg-green-900 text-white font-bold' : 'text-gray-500'}`}> 
            <Link href='/timeline' className='flex justify-center items-center gap-0.5 '>
            <IoTimeOutline /> Timeline</Link></button>    

        
        <button onClick={() => setActiveTab('stats')} className={`flex items-center gap-1  px-1 sm:px-3 py-1 rounded transition-colors ${
                        activeTab === 'stats' ? 'bg-green-900 text-white font-bold' : 'text-gray-500'}`}> 
 <Link href='/stats' className='flex justify-center items-center gap-0.5 '> <GoGraph /> Stats </Link> </button>
                   
        </div>


</div>
         
  
      
    );
};

export default Navbar;