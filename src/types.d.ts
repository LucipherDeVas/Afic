export interface Todo {
    id: string
    title: string
    completed: boolean
}

// Definimos el tipo TodoId que es un objeto con una propiedad id de tipo string
// Esto se usa para identificar una tarea específica por su id
// Pick<Todo, 'id'> significa que estamos creando un nuevo tipo que solo tiene la propiedad id del tipo Todo
export type TodoId = Pick<Todo, 'id'>
export type TodoTitle = Pick<Todo, 'title'>
export type TodoCompleted = Pick<Todo, 'completed'>



export type ListofTodos = Todo[]

