import { type Todo as TodoType, type TodoId, type ListofTodos } from '../types'
import { Todo } from './Todo'


// Importamos el tipo ListofTodos que es una lista de tareas y el componente Todo que representa una tarea individual
// Los props son las propiedades que el componente Todos recibirá, incluyendo una lista de tareas y una función para eliminar tareas
// interface sirve para definir la forma de los props que el componente espera recibir
interface Props {
    todos: ListofTodos
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
}




/* 
 * Este componente recibe una lista de tareas y una función para eliminar tareas.
 * Mapea sobre la lista de tareas y renderiza un componente Todo para cada tarea.
 */
// React.FC<Props> indica que este es un componente funcional de React que recibe Props
// un componente funcional quiere decir que es una función que retorna JSX
// y Props es el tipo de las propiedades que el componente espera recibir
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
    return (
        <ul className='todo-list'>
            {todos.map(todo => (
                // Aquí estamos mapeando sobre la lista de tareas (todos) y creando un elemento <li> para cada tarea
                <li key={todo.id} className={todo.completed ? 'completed' : ''} >

                    <Todo
                        key={todo.id}
                        completed={todo.completed}
                        id={todo.id}
                        title={todo.title}
                        onToggleCompleted={onToggleCompleted}
                        onRemoveTodo={onRemoveTodo}

                    />
                </li>
            ))
            }
        </ul >
    )
}