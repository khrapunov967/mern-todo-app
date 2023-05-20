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

    const { successNotification, errorNotification } = useNotification();

    const createTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.createTodo(todo)
            .then(() => {
                console.log("Created");

                setTodo({
                    ...todo,
                    title: ""
                });

                successNotification("New Todo Was Created!");

                dispatch(fetchTodos())
                    .catch(() => {
                        errorNotification("Something went wrong. Please, reload the page!")
                    })
            })
            .catch((reason) => {
                errorNotification(reason.response.data);
            })
    };

    return (
        <div className="w-fit border-2 p-2 bg-yellow-100 border-yellow-200 flex gap-3 rounded-lg mb-6">
            <div className="flex">
                <input 
                    className="text-lg outline-none text-[#2c2c2c] bg-transparent"
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
                    />
                </button>
            </div>

            <button
                className="text-lg bg-green-500 text-white p-1 rounded-lg border-2 border-green-600 transition-colors duration-200 hover:bg-green-600"
                onClick={createTodo}
            >
                Create
            </button>
        </div>
    );
};

export default CreateTodoForm