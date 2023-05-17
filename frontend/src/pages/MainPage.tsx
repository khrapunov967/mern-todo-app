import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { fetchTodos } from "../store/slices/todos";
import Header from "../components/Header";

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
        </section>
    );
};

export default MainPage;