
import React from 'react';
import friendsData from '../../../../public/data.json'; 
import Image from 'next/image';
import { PiBellZFill } from "react-icons/pi";
import { HiArchive } from "react-icons/hi";
import { FiTrash2 } from "react-icons/fi";
// import Call from "../../../../assets/call.png"
// import Text from "../../../../assets/text.png"
// import Video from "../../../../assets/video.png"
import  QuickCheck from "../../QuickCheck/page"



 
  async function getFriend(cardID) {
    return friendsData.find(f => f.id.toString() === cardID);
}
export default async function FriendDetailsPage ({ params }) {
    const { cardID } = await params;
    const friend=await getFriend(cardID)

    return (
        <div className="grid grid-cols-5 grid-rows-7 gap-4 py-10 px-30">
     
     
        <div className='flex gap-4 py-2'>

    {/* left-side */}
    <div className="col-span-2 row-span-4">
   
   {/* details-card */}
        <div className="card w-80 bg-white border border-gray-100 shadow-md p-3 flex flex-col items-center">
    <Image src={friend.picture} alt={friend.name} width={60} height={60} className=" mt-2 rounded-full object-cover" />
                 <h2 className="font-bold text-xl">{friend.name}</h2>
    

 <button className={`flex items-center gap-1 px-1 sm:px-2 py-0.5 my-1 text-white font-semibold  rounded-full transition-colors ${
                  friend.status === 'On-Track' ?( 'bg-green-700') : 
                 ( friend.status === 'Overdue'?("bg-red-500"):('bg-yellow-300'))}`}>
                    {friend.status}</button>

    
                 <div className='flex flex-wrap justify-center gap-2 mt-0.5'>
               {friend.tags.map((tag, index) => (
                 <button key={index} 
                  className="flex items-center text-green-700 bg-green-100 px-3 py-1 text-xs mb-1 font-bold rounded-full">
                      {tag} </button> ))}</div>
    
               

                    <p className=' text-gray-500 flex items-center justify-center text-center px-5'> "{friend.bio}"</p>
                <p className="text-sm text-gray-500 ">Preferred: {friend.email}</p>

    

        </div>

        {/* mini-card */}

        <div className='py-3'>
            <div className=" card card-dash bg-base-100 flex flex-row gap-2 justify-center items-center py-2">
   <PiBellZFill /> 
    <p className="text-black font-semibold ">Snooze 2 Weeks</p>   
     </div>

     <div className="card card-dash bg-base-100  flex gap-2 flex-row justify-center items-center my-2 py-2">
    <HiArchive />
    <p className="text-black font-semibold ">Archive</p>   
     </div>

     <div className=" card card-dash bg-base-100  flex flex-row gap-2 justify-center items-center py-2">
    <FiTrash2 />
    <p className="text-red-500 font-semibold ">Delete</p>   
     </div>

        </div>
    </div>


{/* right-side */}

      <div className=''>

        {/* card */}
       <div className='flex gap-6 col-span-1 row-span-2 mt-0.5'>
        
            <div className="  card card-dash bg-base-100 w-40 flex flex-col justify-center items-center py-6">
    <h2 className="text-green-900 text-xl font-bold">{friend.days_since_contact}</h2>
    <p className="text-gray-500 ">Days Since Contact</p>   
     </div>

     <div className=" card card-dash bg-base-100 w-40 flex flex-col justify-center items-center py-7">
    <h2 className="text-green-900 text-xl font-bold">{friend.goal}</h2>
    <p className="text-gray-500 ">Goal (Days)</p>   
     </div>

     <div className="card card-dash bg-base-100 w-40 flex flex-col justify-center items-center py-7">
    <h2 className="text-green-900 text-xl font-bold">{friend.next_due_date}</h2>
    <p className="text-gray-500 ">Next Due</p>   
     </div>
         

         </div>

         {/* relation */}

    <div className=" col-span-3 row-span-2 card card-dash bg-base-100  flex flex-row items-center justify-between px-4 py-7 my-4">
    
    <div>
    <h2 className="text-green-900 text-xl font-bold py-2">Relationship Goal</h2>
    <p className="text-gray-500 ">Connect every <span className='text-black font-bold'>30 days</span></p>  
    </div>


    <div>
        <button className="btn">Edit</button>
    </div>


     </div>

      {/* quick check */}
     <div className='col-span-3 row-span-2 card card-dash bg-base-100 px-4 py-2'>
        <h2 className="text-green-900 text-xl font-bold py-2">Quick Check-In</h2>
      
      {/* card */}
      <QuickCheck friendName={friend.name} friendId={friend.id}/>

     </div>




    

      </div>        


    </div>
</div>
    );
};

