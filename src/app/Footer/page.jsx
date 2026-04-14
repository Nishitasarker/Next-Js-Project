import React from 'react';
import Image from "next/image";
import instagram from "../../../assets/instagram.png"
import facebook from "../../../assets/facebook.png"
import twitter from "../../../assets/twitter.png"


const Footer = () => {
    return (
        <div className='bg-green-900 mt-10 flex flex-col  justify-center items-center'>
            <p className='text-4xl font-bold text-white pt-7'>KeenKeeper</p>
            <p className='text-gray-400 pb-2 pt-1 text-sm px-15 sm:px-0'>Your personal shelf of meaningful connections, Browse, tend, and nurture the relationships that matter most.</p>

            <div>
                <p className='text-white font-semibold pb-1'>Social Links</p>
                <div className='flex gap-2 pb-2'>
                    <Image src={instagram} alt='instagram' className='w-6 h-6'></Image>
                    <Image src={facebook} alt='facebook' className='w-6 h-6'></Image>
                    <Image src={twitter} alt='twitter' className='w-6 h-6'></Image>
                </div>
            </div>

            <div className="h-[1px] w-[60%] bg-gray-500 my-1"></div>
            <div className='text-gray-400 w-full text-sm flex flex-col px-30  pb-3 sm:flex-row sm:flex justify-between sm:px-65'>
                <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
               <div>
                 <ul className='flex gap-1'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
               </div>
            </div>
        </div>
    );
};

export default Footer;