import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { todos } from '../helper/constant'
import { SelectedTodo, Todo, selectTodo, resetTodo, toggleTodo } from '../slice/todoSlice'

export const Todos: VFC = () => {
    console.log("DEBUG: rendered todos component")
    const dispatch = useAppDispatch()
    const selectedTodo: Todo = useAppSelector(SelectedTodo)
    return (
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div 
                            key={todo.id}
                            onClick={(_) => {
                                dispatch(
                                    toggleTodo(todo),
                                );
                            }}
                        >
                            {selectedTodo.id === todo.id
                            ? `Title: ${todo.title} is selected`
                            : `ID: ${todo.id}, title: ${todo.title}`
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
