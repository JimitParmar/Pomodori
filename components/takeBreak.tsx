'use client'
import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export function TakeBreak() {
  const [goal, setGoal] = React.useState(0)

  function onClick(adjustment: number) {
    setGoal(Math.max(0, Math.min(120, goal + adjustment)))
  }
  const buttonText = goal > 60 ? "You are a Dissapointment!" : goal > 30 ? "Are you kidding me?" : "Seriously?";

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-white text-black p-6 border border-dashed border-slate-400 transition-all ease-in-out delay-75 hover:bg-slate-300 hover:border-slate-300 hover:text-gray-800 rounded-2xl">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Take Break</DrawerTitle>
            <DrawerDescription>Taking breaks is essential but dont get carried away!</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-5)}
                disabled={goal <= 0}
              >
                <Minus className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Minutes
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(5)}
                disabled={goal >= 120}
              >
                <Plus className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            {/* <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
          </div>
          <DrawerFooter className="py-10">
            <Button disabled={goal == 0} className="bg-indigo-500 hover:bg-indigo-700">{buttonText}</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
