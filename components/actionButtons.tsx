import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

export function AddTask() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white text-black p-6 border  border-slate-400 transition-all ease-in-out delay-75 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white rounded-2xl" >Add Task</Button>
      </SheetTrigger>
      <SheetContent className="min-w-[500px]">
        <SheetHeader>
          <SheetTitle>Add Task</SheetTitle>
          <SheetDescription>
            Add details over here, dont worry you can change it later
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="Automate Penetration Testing" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Alloted Time
            </Label>
            <AddTime/>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Notes
            </Label>
            <textarea id="notes"  placeholder="Need to update testing plugins" className="col-span-3 p-3 border rounded-md" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="bg-white text-black border  border-slate-400 transition-all ease-in-out delay-75 hover:bg-indigo-600 hover:border-indigo-600 hover:text-white rounded-xl">Add Task</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

