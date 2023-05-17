import { useState } from "react";
import { Todos } from "../services/todos";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchTodos } from "../store/slices/todos";

const CreateTodoForm: React.FC = () => {

    const [todo, setTodo] = useState({
        title: "",
        completed: false
    });

    const dispatch = useAppDispatch();

    const createTodo = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        await Todos.createTodo(todo).then(() => {
            console.log("Created");

            setTodo({
                ...todo,
                title: ""
            });
            
            dispatch(fetchTodos());
        });
    }

    return (
        <div className="w-fit border-2 p-2 flex">
            <input 
                type="text"  
                placeholder="Title"
                value={todo.title}
                onChange={(e) => setTodo({...todo, title: e.target.value})}
            />

            <button
                onClick={createTodo}
            >
                Create
            </button>
        </div>
    );
};

export default CreateTodoForm