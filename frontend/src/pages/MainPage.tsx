import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchTodos } from "../store/slices/todos";

const MainPage: React.FC = () => {

    const todos = useAppSelector(state => state.todos.todos);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
        console.log(todos);
    }, []);

    return (
        <section className="w-full">
            MainPage
        </section>
    );
};

export default MainPage;