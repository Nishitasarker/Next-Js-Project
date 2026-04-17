"use client";
import Image from "next/image";
import Call from "../../../assets/call.png";
import Text from "../../../assets/text.png";
import Video from "../../../assets/video.png";
import { toast } from 'react-toastify';

export default function QuickCheck({ friendName,friendId }) { 
  const handleStore = (type) => {
    let stored = JSON.parse(sessionStorage.getItem("userTimeline")) || [];

    const isAlreadyDone = stored.find(
    (item) => item.name === friendName && item.type === type
  );

  if (isAlreadyDone) {
     toast.warn(`${type} with ${friendName} already added!!!`);
    return;
  }


       const newEntry = {
      id: Date.now(),
      friendId: friendId,
      name: friendName, 
      type: type, 
     timestamp: new Date().toISOString()
    };

    
    stored.push(newEntry);
    sessionStorage.setItem("userTimeline", JSON.stringify(stored));

    toast.success(`${type} with ${friendName} added!`);
  };
  return (
    <div className="flex flex-col md:flex-row gap-2 pb-2 px-0 md:px-10 ">
      <div
        onClick={() => handleStore("call")}
        className="card card-dash bg-gray-100 border w-35 flex flex-row  gap-12 md:gap-0 md:flex-col  justify-center items-center py-2 cursor-pointer"
      >
        <Image src={Call} alt="Call" className="w-6 h-6" />
        <p>Call</p>
      </div>

      <div
        onClick={() => handleStore("text")}
        className="card card-dash bg-gray-100 border w-35 flex flex-row  gap-12 md:gap-0 md:flex-col justify-center items-center py-2 cursor-pointer"
      >
        <Image src={Text} alt="Text" className="w-6 h-6" />
        <p>Text</p>
      </div>

      <div
        onClick={() => handleStore("video")}
        className="card card-dash bg-gray-100 border w-35 flex flex-row  gap-12 md:gap-0 md:flex-col justify-center items-center py-2 cursor-pointer"
      >
        <Image src={Video} alt="Video" className="w-6 h-6" />
        <p>Video</p>
      </div>
    </div>
  );
}