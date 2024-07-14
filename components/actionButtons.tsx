import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { AddTime } from "./addTime"

interface AddTaskProps{
  addTask : (title:string, duration:number, notes:string) => void;
}

export function AddTask({ addTask }: AddTaskProps) {
  const [title, setTitle] = useState('');// Adjust according to AddTime component
  const [notes, setNotes] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    const totalSeconds = parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds);
    if(title.trim()){
    addTask(title,totalSeconds,notes);
    setTitle('');
    setHours('');
    setMinutes('');
    setSeconds('');
    setNotes('');
  }
}
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white text-black p-6 border  border-slate-400 transition-all ease-in-out  hover:bg-indigo-600 hover:border-indigo-600 hover:text-white rounded-2xl" >Add Task</Button>
      </SheetTrigger>
      <SheetContent className="min-w-[500px]">
        <SheetHeader>
          <SheetTitle>Add Task</SheetTitle>
          <SheetDescription>
            Add details over here, dont worry you can change it later
          </SheetDescription>
        </SheetHeader>
        <form onSubmit={handleSubmit}>
        
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="title" 
            placeholder="Automate Penetration Testing" 
            className="col-span-3"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Alloted Time
            </Label>
            <Input id="hours" 
            placeholder="Hours" 
            className=" text-center"
            value={hours}
            onChange={(e) => setHours(e.target.value)} />
            <Input id="minutes" 
            placeholder="Minutes" 
            className="text-center"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)} />
            <Input id="seconds" 
            placeholder="Seconds" 
            className="text-center"
            value={seconds}
            onChange={(e) => setSeconds(e.target.value)} />
            {/* <AddTime/> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Notes
            </Label>
            <textarea id="notes" 
            placeholder="Need to update testing plugins" 
            className="col-span-3 p-3 border rounded-md text-sm"
            value={notes}
            onChange={(e) => setNotes(e.target.value)} />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="bg-white text-black border  border-slate-400 transition-all ease-in-out delay-75 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white rounded-xl">Add Task</Button>
          </SheetClose>
        </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  )
}

