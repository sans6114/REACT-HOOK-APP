import {
  Button,
  Checkbox,
  Table,
} from 'flowbite-react';

import { ModalTask } from './ModalTask';

export const ListTodos = ({ todos, onChangeTask, onDeleteTask }) => {

    return (

        <Table.Body className="divide-y text-center">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="p-4">
                    {todos.task}
                </Table.Cell>
                <Table.Cell>
                    <Checkbox checked={todos.done} onChange={() => onChangeTask({ ...todos, done: !todos.done })} />
                </Table.Cell>
                <Table.Cell className='flex justify-center'>
                    <ModalTask todo={todos} onChange={onChangeTask}/>
                </Table.Cell>
                <Table.Cell>
                    <Button onClick={() => onDeleteTask(todos.id)} className="font-medium  hover:underline max-w-sm mx-auto">
                        Delete
                    </Button>
                </Table.Cell>
            </Table.Row>
        </Table.Body>

    )
}
