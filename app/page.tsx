import { AddTask } from "@/components/actionButtons";
import { TakeBreak } from "@/components/takeBreak";
import { MainClock } from "@/components/clock";
import { Play, Next, Repeat } from "@/components/icons";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      
      
      {/* Major Stats */}
      <div className="w-72 mx-auto flex p-2 justify-center gap-8 mt-4 bg-slate-200 rounded-lg">
        <div className="flex justify-center gap-3">
          <div className="text-3xl font-semibold">4.6</div>
          <div className="text-xs pt-0.5">Estimated<br/>Time(h)</div>
        </div>
        <div className="flex justify-center gap-3">
          <div className="text-3xl font-semibold">8</div>
          <div className="text-xs pt-0.5">Total<br/>Tasks</div>
        </div>
      </div>
      
      
      {/* Main Clock Timer */}
      <div className="flex justify-center mt-12">
        <MainClock duration={30}/>
      </div>
      
      
      {/* Control Buttons */}
      <div className="flex justify-center mt-8 gap-9 items-center">
        <div className="border-2 border-slate-400 transition-all ease-in-out delay-75 hover:bg-slate-200 rounded-full p-3"><Repeat/></div>
        <div className="border-2 border-indigo-400  transition-all ease-in-out delay-75 hover:bg-indigo-100 rounded-full p-3"><Play/></div>
        <div className="border-2 border-slate-400  transition-all ease-in-out delay-75 hover:bg-slate-200 rounded-full p-3"><Next/></div>
      </div>

    {/* Next Tasks */}
      <div className="w-40 mx-auto flex p-3 justify-center gap-8 mt-12">
        <div className="flex justify-center gap-6 font-medium ">
          <AddTask/>
          <TakeBreak/>
        </div>
      </div>
     
    
    
    
      </main>
  );
}
