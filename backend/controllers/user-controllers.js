import User from "../models/user.js";

export const getUserInfo = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await User.findById(userId).select("name email");

        if (!user) {
            return res.status(404).json("No user found");
        }

        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong!");
    }
};