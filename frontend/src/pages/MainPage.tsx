import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchTodos } from "../store/slices/todos";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";
import CreateTodoForm from "../components/CreateTodoForm";

const MainPage: React.FC = () => {

    const todos = useAppSelector(state => state.todos.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodos()).then(() => {
            console.log(todos)
        })
    }, []);

    return (
        <section className="w-full">
            <Header />


            <div className="w-full flex flex-col gap-2 items-center">
                <CreateTodoForm />
                
                {
                    todos.map((todo) => {
                        return (
                            <TodoCard
                                key={todo._id}
                                id={todo._id}
                                title={todo.title}
                                completed={todo.completed}
                            />
                        );
                    })
                }
            </div>
        </section>
    );
};

export default MainPage;