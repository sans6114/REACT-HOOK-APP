import { useReducer } from 'react';

import { Table } from 'flowbite-react';

import { myReducer } from '../useEffect/reducer/myReducer';
import { AddTask } from './AddTask';
import { ListTodos } from './ListTodos';

const todoList = [
    { id: 1, task: "Learn React basics", done: false },
    { id: 2, task: "Build a To-Do App", done: false },
    { id: 3, task: "Study React Hooks", done: true },
    { id: 4, task: "Practice Tailwind CSS", done: false },
    { id: 5, task: "Refactor project structure", done: true }
];
export const UseReducerSection = ({ title }) => {

    const [tasks, dispatch] = useReducer(myReducer, todoList)
    let nextId = tasks.length + 1;
    //add
    const handleAddTask = (task) => {
        console.log(tasks)
        dispatch({
            type: 'added',
            id: nextId++,
            task: task,
        })
    }
    //change
    const handleChangeTask = (task) => {
        console.log(task)
        dispatch({
            type: 'change',
            task: task,
        })
    }
    //delete
    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId,
        })
    }
    return (
        <>
            <h1 className="text-3xl font-extrabold text-center">
                {title}
            </h1>
            <AddTask onAddTask={handleAddTask} />
            <div className="overflow-x-auto">
                <Table >
                    <Table.Head className='text-start'>
                        <Table.HeadCell>Task Name</Table.HeadCell>
                        <Table.HeadCell>Done</Table.HeadCell>
                        <Table.HeadCell>Edit Task</Table.HeadCell>
                    </Table.Head>
                    {
                        tasks.map(task => <ListTodos key={task.id} todos={task} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask} />)
                    }
                </Table>
            </div>
        </>
    )
}
