import { useAppDispatch } from "../hooks/useAppDispatch";
import { useNotification } from "../hooks/useNotification";
import { Todos } from "../services/todos";
import { fetchTodos } from "../store/slices/todos";
import { ITodoCard } from "../types/props";
import { IoMdTrash, IoMdCheckmark, IoMdDoneAll } from "react-icons/io"

const TodoCard: React.FC<ITodoCard> = ({title, completed, id}) => {

    const dispatch = useAppDispatch();
    const { errorNotification, successNotification } = useNotification();

    const updateTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.updateTodo(id, {title, completed: !completed})
            .then(() => {
                dispatch(fetchTodos());
            })
            .catch((reason) => {
                errorNotification("Can't update todo!");
            });
    };

    const deleteTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.deleteTodo(id)
            .then(() => {

                successNotification("Todo was deleted!");

                dispatch(fetchTodos())
                    .catch(() => {
                        errorNotification("Something went wrong. Please, reload the page!")
                    });
            })
            .catch(() => {
                errorNotification("Can't delete todo!");
            });
    };

    return (
        <div className="w-full bg-[#fff6bd] max-w-[474px] md:max-w-[90%] flex justify-between p-3 rounded-lg gap-1">
            <p className={`font-semibold text-[#353839] overflow-hidden text-ellipsis ${completed ? "line-through" : ""}`}>
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