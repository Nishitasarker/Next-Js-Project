import React from 'react';

const TotalCard = () => {
    return (

        <div >
        <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6  py-10 px-1 md:px-50   ">

      <div className="card card-dash bg-base-100 w-50  flex flex-col justify-center items-center   py-6">
    <h2 className="text-green-900 text-xl font-bold">10</h2>
    <p className="text-gray-500 ">Total Friends</p>   
     </div> 


      <div className="card card-dash bg-base-100 w-50 flex flex-col justify-center items-center py-6">
    <h2 className="text-green-900 text-xl font-bold">3</h2>
    <p className="text-gray-500 ">On Track</p>   
     </div> 


      <div className="card card-dash bg-base-100 w-50 flex flex-col justify-center items-center py-6">
    <h2 className="text-green-900 text-xl font-bold">4</h2>
    <p className="text-gray-500 ">Need Attention</p>   
     </div>


      <div className="card card-dash bg-base-100 w-50 flex flex-col justify-center items-center py-6">
    <h2 className="text-green-900 text-xl font-bold">12</h2>
    <p className="text-gray-500  w-fit mx-auto">Interactions This Month</p>   
     </div>
    </div>
    
    <div className='flex flex-col justify-center items-center pb-5'>
        <div className="h-[1px] w-[70%] bg-gray-300 my-1 flex flex-col justify-center items-center"></div>

    </div>
     
    </div>

    );
};

export default TotalCard;