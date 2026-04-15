import React from 'react';
import friendsData from '../../../public/data.json'; 
import Image from 'next/image';
export default function CardSection() {
  const friends = friendsData; 

  return (
    <div className='pt-5 px-5 md:px-50'>
      <div className='mb-8'>
        <p className='font-bold text-3xl text-gray-800'>Your Friends</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6'>
        {friends.map(friend => (
          <div key={friend.id} className="card bg-white border border-gray-100 shadow-md p-3 flex flex-col items-center">
             <Image src={friend.picture} alt={friend.name} width={50} height={50} className=" mt-2 rounded-full object-cover mb-4" />
             <h2 className="font-bold text-xl">{friend.name}</h2>
             <p className="text-sm text-blue-500">62d ago</p>


             <div className='flex flex-wrap justify-center gap-2 mt-2'>
           {friend.tags.map((tag, index) => (

             <button key={index} 
              className="flex items-center text-green-700 bg-green-100 px-3 py-1 text-xs mb-1 font-bold rounded-full">
                  {tag} </button> ))}</div>

            <button className={`flex items-center gap-1 px-1 sm:px-2 py-0.5 my-1 text-white font-semibold  rounded-full transition-colors ${
              friend.status === 'On-Track' ?( 'bg-green-700') : 
             ( friend.status === 'Overdue'?("bg-red-500"):('bg-yellow-300'))}`}>
                {friend.status}</button>


             </div>
        ))}
      </div>
    </div>
  );
}