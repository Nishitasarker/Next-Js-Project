import { AiOutlinePlus } from "react-icons/ai";
import TotalCard from "./TotalCard/page.jsx";
import CardSection from "./CardSection/page.jsx";

export default function Home() {
  return (
    <div className="bg-gray-100" >
     <main className="grid text-center space-y-2 justify-center content-center pt-10 ">
      <p className="text-2xl font-bold">Friends to keep close in your life</p>
      <p className="text-sm text-gray-400 pb-3">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br/>
      relationships that matter most.</p>
      <button className=" w-fit mx-auto rounded font-bold text-white bg-green-900 gap-1 flex items-center justify-center px-3 py-1"> <AiOutlinePlus /> Add a Friend</button>
     </main>

    <TotalCard></TotalCard>
    <CardSection></CardSection>
    
    </div>
  );
}
