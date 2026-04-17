"use client";
import { useEffect, useState } from "react";
import friendsData from '../../../public/data.json'; 
import Image from "next/image";
import { usePathname } from "next/navigation";
import Call from "../../../assets/call.png";
import Text from "../../../assets/text.png";
import Video from "../../../assets/video.png";


export default function Timeline() {
  const [items, setItems] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [filteredType, setFilteredType] = useState("");
 const pathname = usePathname();

useEffect(() => {
      if (pathname.includes("/timeline")) {
      const savedData = JSON.parse(sessionStorage.getItem("userTimeline")) || [];
      setItems(savedData);
    } else {
      setItems([]); 
    }
  }, [pathname]);

const handleSearch = () => {
    setFilteredType(searchTerm.toLowerCase());
  };

  if (items.length === 0 || !pathname.includes("/timeline")) {
    return null;}

const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};



  return (
    <div className="p-10">
      {items.length > 0 ? (
        <>
      <h1 className="text-4xl font-bold mb-5">TimeLine</h1>


<label className="input">
  <svg  className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Filter Timeline"  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      handleSearch();}}} />
  
</label>
     
         
        {[...items].reverse()
        .filter((item) => {
          if (filteredType === "") return true; 
          return item.type.toLowerCase() === filteredType; 
        })
        .map((item) => {
         const friendInfo = friendsData.find(f => String(f.id) === String(item.friendId));
           return (
          <div key={item.id} className="border p-4 my-3 rounded-lg shadow-sm bg-white">
            
            <div className="flex gap-2 items-center">
              <div>
                <span className="text-xl mr-2 flex items-center justify-center">
                  {item.type === "call" && <Image src={Call} alt='Call' className='w-6 h-6 '></Image>  }
                  {item.type === "text" && <Image src={Text} alt='Text' className='w-6 h-6'></Image>}
                  {item.type === "video" && <Image src={Video} alt='Video' className='w-6 h-6'></Image>}
                </span>
                </div>

                <div>
                <p className="text-sm text-gray-600">
                  <span className="capitalize text-green-500 text-xl font-bold">{item.type}</span>{" "} with {friendInfo ? friendInfo.name : item.name}
                </p>
                <span className="text-sm text-gray-600">{formatDate(item.timestamp || item.date)}</span>
                </div>
              </div>
                          
          </div>
     );
            })
          }
        </>
      ) : (
               <p className="text-center text-gray-500">No timeline data available.</p>
      )}
    </div>
  );
}