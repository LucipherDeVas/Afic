import { useState } from "react"
import { Todos } from '../componentes/Todos'

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
    }
]



const App = () => {    // usamos useState para manejar el estado de los todos
    const [todos, setTodos] = useState(mockTodos);


    const handleRemove = (id: string): void => {
        const newTodos = todos.filter(todo => todo.id != id)
        setTodos(newTodos)
    }





    return (
        <div className="todoapp">

            <Todos
                onRemoveTodo={handleRemove}
                todos={todos}
            />
        </div>


    )
}

export default App;


