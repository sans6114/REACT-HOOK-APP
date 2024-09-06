import { useState } from 'react';

import {
  Button,
  Modal,
} from 'flowbite-react';

export const ModalTask = ({ todo, onChange }) => {
    const [openModal, setOpenModal] = useState(false)
    const [inputValue, setInputValue] = useState(todo.task)

    const className = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'


    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const input = inputValue.trim()
        if (input.length <= 1) return
        onChange({...todo, task: input})
        setInputValue('')
        setOpenModal(false)
    }
 
    return (
        <>
            <Button onClick={() => setOpenModal(true)}>Edit</Button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Edit your task</Modal.Header>
                <Modal.Body>

                    <form
                        aria-label='form'
                        className='flex flex-col gap-y-2'
                        onSubmit={onSubmit}
                    >

                        <input
                            onChange={onInputChange}
                            name='username'
                            value={inputValue}
                            placeholder="Search category"
                            type="text"
                            id="default-input"
                            className={className}
                        />

                        <Button type='submit'>Change</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
