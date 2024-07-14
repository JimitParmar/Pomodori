import React from 'react';

interface Task {
    id: number;
    title: string;
    duration:number;
}

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div className="mt-4">
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} className="p-2 border-b">
                            {task.title}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks yet</p>
            )}
        </div>
    );
};

export default TaskList;
