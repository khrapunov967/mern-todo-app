import { useState } from "react";
import { Todos } from "../services/todos";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { IoMdClose } from "react-icons/io";
import { fetchTodos } from "../store/slices/todos";
import { useNotification } from "../hooks/useNotification";

const CreateTodoForm: React.FC = () => {

    const [todo, setTodo] = useState({
        title: "",
        completed: false
    });

    const dispatch = useAppDispatch();

    const { successNotification, errorNotification, warningNotification } = useNotification();

    const createTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.createTodo(todo)
            .then(() => {
                setTodo({
                    ...todo,
                    title: ""
                });

                successNotification("New Todo Was Created!");

                dispatch(fetchTodos())
                    .catch(() => {
                        errorNotification("Something went wrong. Please, reload the page!")
                    });
            })
            .catch((reason) => {
                warningNotification(reason.response.data);
            })
    };

    return (
        <div className="w-full max-w-[474px] md:max-w-[90%] border-2 p-2 bg-inherit border-[#c5bbe4] flex gap-3 rounded-lg mb-6">
            <div className="flex">
                <input 
                    className="text-lg outline-none text-[#353839] bg-transparent w-full"
                    type="text"  
                    placeholder="Title"
                    value={todo.title}
                    onChange={(e) => setTodo({...todo, title: e.target.value})}
                />

                <button
                    className={`${todo.title.length ? "opacity-1" : "opacity-0"}`}
                    disabled={!!!todo.title.length}
                    onClick={() => setTodo({...todo, title: ""})}
                >
                    <IoMdClose
                        size={"20px"}
                        color="#353839"
                    />
                </button>
            </div>

            <button
                className="text-lg bg-inherit text-[#ceedc7] p-1 rounded-lg border-2 border-[#ceedc7] transition-colors duration-200 hover:bg-[#ceedc7] hover:text-white"
                onClick={createTodo}
            >
                Create
            </button>
        </div>
    );
};

export default CreateTodoForm