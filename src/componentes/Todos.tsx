import { type ListofTodos } from '../types'
import { Todo } from './Todo'

interface Props {
    todos: ListofTodos
    onRemoveTodo: (id: string) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <Todo
                        key={todo.id}
                        completed={todo.completed}
                        id={todo.id}
                        title={todo.title}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))
            }
        </ul >
    )
}