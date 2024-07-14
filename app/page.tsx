'use client'

import { AddTask } from "@/components/actionButtons";
import { TakeBreak } from "@/components/takeBreak";
import { MainClock } from "@/components/clock";
import { Play, Next, Repeat, Pause } from "@/components/icons";
import { useState, useEffect } from "react";
import TaskList from "@/components/tasklist";

interface Task {
  id: number;
  title: string;
  duration: number;
  notes: string;
  completed?: boolean; // Optional flag to mark task completion
}

export default function Home() {
  const [key, setKey] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timerDuration, setTimerDuration] = useState<number>(0);

  // Effect to handle timer logic
  useEffect(() => {
    if (isPlaying && timerDuration > 0) {
      const interval = setInterval(() => {
        setTimerDuration(prevDuration => prevDuration - 1);
      }, 1000);

      // Cleanup function to stop interval when component unmounts or timer reaches 0
      return () => clearInterval(interval);
    } else if (timerDuration === 0) {
      // Task completed logic
      handleTaskCompletion();
    }
  }, [isPlaying, timerDuration]);

  // Function to handle task completion
  const handleTaskCompletion = () => {
    // Mark current task as completed
    const updatedTasks = tasks.map((task, index) =>
      index === currentTaskIndex ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);

    // Move to the next task, if available
    if (currentTaskIndex < tasks.length - 1) {
      setCurrentTaskIndex(prevIndex => prevIndex + 1);
      setTimerDuration(tasks[currentTaskIndex + 1].duration);
    } else {
      // No more tasks, reset timer and stop playing
      setIsPlaying(false);
      setTimerDuration(0);
    }
  };

  // Function to handle play/pause button click
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Function to handle repeat button click
  const handleRepeat = () => {
    setKey(prevKey => prevKey + 1);
    setTimerDuration(tasks[currentTaskIndex].duration); // Reset timer to current task duration
  };

  // Function to add new task
  const addTask = (title: string, duration: number, notes: string) => {
    const newTask: Task = { id: Date.now(), title, duration, notes };
    setTasks([...tasks, newTask]);

    // Automatically start timer if no tasks are currently running
    if (!isPlaying && tasks.length === 0) {
      setCurrentTaskIndex(0);
      setTimerDuration(duration);
      setIsPlaying(true);
    }
  };

  return (
    <main>
      {/* Major Stats */}
      <div className="w-72 mx-auto flex p-2 justify-center gap-8 mt-4 bg-slate-200 rounded-lg">
        <div className="flex justify-center gap-3">
          <div className="text-3xl font-semibold">4.6</div>
          <div className="text-xs pt-0.5">Estimated<br />Time(h)</div>
        </div>
        <div className="flex justify-center gap-3">
          <div className="text-3xl font-semibold">{tasks.length}</div>
          <div className="text-xs pt-0.5">Total<br />Tasks</div>
        </div>
      </div>

      {/* Main Clock Timer */}
      <div className="flex justify-center mt-12">
        <MainClock duration={timerDuration} key={key} isPlaying={isPlaying} />
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center mt-8 gap-9 items-center">
        <div
          className="border-2 border-slate-400 transition-all ease-in-out hover:bg-slate-200 rounded-full p-3"
          onClick={handleRepeat}
        >
          <Repeat />
        </div>
        <div
          className="border-2 border-indigo-400 transition-all ease-in-out hover:bg-indigo-100 rounded-full p-3"
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause /> : <Play />}
        </div>
        <div className="border-2 border-slate-400 transition-all ease-in-out hover:bg-slate-200 rounded-full p-3">
          <Next />
        </div>
      </div>

      {/* Next Tasks */}
      <div className="w-40 mx-auto flex p-3 justify-center gap-8 mt-12">
        <div className="flex justify-center gap-6 font-medium">
          <AddTask addTask={addTask} />
          <TakeBreak />
          {/* <TaskList tasks={tasks} /> */}
        </div>
      </div>
    </main>
  );
}
