import Todo from "../models/todo.js";

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({user: req.user.id});
        return res.status(200).json(todos);

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong");
    }
};

export const createTodo = async (req, res) => {
    try {
        if (!req.body.title.length) {
            return res.status(500).json("Title is required!");
        }

        const newTodo = new Todo({
            title: req.body.title,
            user: req.user.id,
            completed: req.body.completed
        })

        const savedTodo = await newTodo.save();

        return res.status(201).json(savedTodo);

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong");
    }
};

export const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id).exec();

        if (!todo) {
            return res.status(500).json("No todo with this ID");
        }

        if (todo.user.toString() !== req.user.id) {
            return res.status(500).json("It's not your todo");
        }

        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            completed: req.body.completed
        }, { new: true });

        return res.status(200).json(updatedTodo);

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong");
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id).exec();

        if (!todo) {
            return res.status(500).json("No todo with this ID");
        }

        if (todo.user.toString() !== req.user.id) {
            return res.status(500).json("It's not your todo");
        }

        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

        return res.status(200).json(deletedTodo);

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong");
    }
};