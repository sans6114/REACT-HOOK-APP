export function myReducer(todoList, action) {
    //devuelve el proximo estado
    switch (action.type) {
        case 'added': {
            return [
                ...todoList,
                {
                    id: action.id,
                    task: action.task,
                    done: false,
                },
            ];
        }
        case 'change': {
            return todoList.map((todo) => {
                if (todo.id === action.task.id) {
                    return { ...todo, task:action.task.task, done: !todo.done };
                } else {
                    return todo;
                }
            })
        }
        case 'deleted': {
            return todoList.filter((todo) => todo.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}