import {
  Button,
  Checkbox,
  Table,
} from 'flowbite-react';

export const ListTodos = ({todos}) => {
  return (

    <Table.Body className="divide-y">
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="p-4">
          {todos.task}
        </Table.Cell>
        <Table.Cell>
        <Checkbox checked={todos.done} />
        </Table.Cell>
        <Table.Cell>
          <Button className="font-medium  hover:underline max-w-sm mx-auto">
            edit
          </Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>

  )
}
