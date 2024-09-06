import { useReducer } from 'react';

import { Table } from 'flowbite-react';

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

    //handleadd
    //handlechange
    //handledelete

    const handleAddTask = (task) => {
        dispatch({
            type: 'added',
            id: nextId++,
            task: task,
        })
    }

    const handleChangeTask = (task) => {
        dispatch({
            type: 'change',
            task: task,
        })
    }

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId,
        })
    }

    function myReducer(todoList, action) {
        //devuelve el proximo estado
        if (action.type === 'added') {
            return [
                ...todoList,
                {
                    id: action.id,
                    task: action.task,
                    done: false,
                }
            ]
        } else if(action.type === 'change'){
            return todoList.map((todo) => {
                todo.id === action.task.id
                ? {...todo, task: action.task.task, done: action.task.done}
                : todo
            })
        } else if (action.type === 'deleted'){
            return todoList.filter((todo) => todo.id !== action.id)
        }else {
            throw Error('Unknown action: ' + action.type);
    }
    }

    return (
        <>
            <h1 className="text-3xl font-extrabold text-center">
                {title}
            </h1>
            <AddTask onAddTask={handleAddTask}/>
            <div className="overflow-x-auto">
                <Table >
                    <Table.Head className='text-start'>
                        <Table.HeadCell>Task Name</Table.HeadCell>
                        <Table.HeadCell>Done</Table.HeadCell>
                        <Table.HeadCell>Edit Task</Table.HeadCell>
                    </Table.Head>
                    {
                        tasks.map(task => <ListTodos key={task.id} todos={task}  onChangeTask={handleChangeTask} />)
                    }
                </Table>
            </div>


        </>
    )
}
