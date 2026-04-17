import React from 'react';

const loading = () => {
    return (
       <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <span className="loading loading-spinner loading-lg text-success"></span>
          <p className="text-gray-500 font-medium animate-pulse">Loading Friend Details...</p>
        </div>
      </div>
    );
};

export default loading;