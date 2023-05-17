import { ITodoCard } from "../types/props";

const TodoCard: React.FC<ITodoCard> = ({title, completed}) => {
    return (
        <div className="w-full max-w-[300px] border-2">
            <p className={`font-semibold ${completed ? "decoration-slice" : ""}`}>
                {title}
            </p>
        </div>
    );
};

export default TodoCard;