import { useState } from "react"
import { Todos } from '../componentes/Todos'
import { TodoCompleted, type TodoId, type Todo as TodoType } from "../types";


// cuando hablamos de "todos" nos referimos a una lista de tareas pendientes o "todo" para una tarea

const mockTodos = [ // esto sirve para simular una lista de tareas
    {
        id: '1',
        title: 'Learn Next.js',
        completed: true,
    },
    {
        id: '2',
        title: 'Build a Todo App',
        completed: false,
    },
    {
        id: '3',
        title: 'Deploy to Vercel',
        completed: false,
    },
    {
        id: '4',
        title: " ****** todos los **** de la AFIC",
        completed: false,
    }

]



const App = () => {    // usamos useState para manejar el estado de los todos
    const [todos, setTodos] = useState(mockTodos); // mockTodos es una lista de tareas simuladas que se usa para inicializar el estado de los todos

    // esta función se encarga de eliminar un todo de la lista
    // recibe el id del todo a eliminar, filtra la lista de todos y actualiza el estado
    // setTodos se usa para actualizar el estado de los todos


    // esta función se encarga de eliminar un todo de la lista
    // recibe el id del todo a eliminar, filtra la lista de todos y actualiza el estado
    const handleRemove = ({ id }: TodoId): void => {
        const newTodos = todos.filter(todo => todo.id != id) // filtra la lista de todos para eliminar el todo con el id especificado
        // el operador != se usa para comparar si el id del todo actual es diferente al id del todo a eliminar
        // si son diferentes, el todo se mantiene en la lista, si son iguales, se elimina
        // setTodos se usa para actualizar el estado de los todos con la nueva lista filtrada
        setTodos(newTodos)
    }

    const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
        const newTodos = todos.map(todo => {

            if (todo.id === id) {
                return { ...todo, completed }
            }

            return todo
        })

        setTodos(newTodos)
    }

    return (
        <div className="todoapp">

            <Todos
                onToggleCompleted={handleCompleted}
                onRemoveTodo={handleRemove}
                todos={todos}
            />
        </div>


    )
}

export default App;


