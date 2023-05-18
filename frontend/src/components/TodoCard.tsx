import { useAppDispatch } from "../hooks/useAppDispatch";
import { Todos } from "../services/todos";
import { fetchTodos } from "../store/slices/todos";
import { ITodoCard } from "../types/props";
import { IoMdTrash, IoMdCheckmark, IoMdDoneAll } from "react-icons/io"

const TodoCard: React.FC<ITodoCard> = ({title, completed, id}) => {

    const dispatch = useAppDispatch();

    const updateTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.updateTodo(id, {title, completed: !completed})
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch((reason) => {
                console.log(reason)
            });
    };

    const deleteTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.deleteTodo(id)
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch((reason) => {
                console.log(reason);
            });
    };

    return (
        <div className="w-full max-w-[300px] border-2 flex justify-between p-3 rounded-lg">
            <p className={`font-semibold ${completed ? "line-through" : ""}`}>
                {title}
            </p>

            <div className="flex gap-2">
                <button
                    onClick={updateTodo}
                >
                    {completed ? 
                        <IoMdDoneAll 
                            className="text-stone-500"
                            size={"22px"}
                        /> : 
                        <IoMdCheckmark 
                            className="text-green-500"
                            size={"22px"}
                        />}
                </button>

                <button
                    onClick={deleteTodo}
                >
                    <IoMdTrash
                        className="text-red-500"
                        size={"22px"}
                    />
                </button>
            </div>
        </div>
    );
};

export default TodoCard;