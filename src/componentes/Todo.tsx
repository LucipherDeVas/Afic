import { type Todo as TodoType } from '../types';

interface Props extends TodoType {
    onRemoveTodo: (id: string) => void
}


/* esto sirve para que el componente reciba las propiedades de tipo TodoType y la función onRemoveTodo

*/
export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => { }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => { onRemoveTodo(id) }}
            />

        </div>
    )
}