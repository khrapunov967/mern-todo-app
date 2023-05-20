import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchTodos } from "../store/slices/todos";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";
import CreateTodoForm from "../components/CreateTodoForm";
import Loader from "../components/Loader";

const MainPage: React.FC = () => {

    const { todos, isFetching} = useAppSelector(state => state.todos);
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
                    isFetching ? <Loader /> :
                    !todos.length ? <p className="text-[#2c2c2c]">No todos</p> :
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