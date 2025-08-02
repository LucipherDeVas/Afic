import { type TodoId, type Todo as TodoType } from '../types';


interface Props extends TodoType {
    onToggleCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
    onRemoveTodo: ({ id }: TodoId) => void
}


/* esto sirve para que el componente reciba las propiedades de tipo TodoType y la función onRemoveTodo

*/
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {

    const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>): void => {
        onToggleCompleted({
            id,
            completed: event.target.checked
        })
    }

    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={(event) => {
                    onToggleCompleted({ id, completed: event.target.checked })
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo({ id }) }}
            />

        </div>
    )
}