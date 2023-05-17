import User from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(500).json("Name, email and password are required!");
    }

    try {
        const user = await User.findOne({email: email}).select("name email password");

        if (user) {
            return res.status(500).json("This user already exist with this email");
        }

        const salt = await bcryptjs.genSalt(8);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).json("User was created!");

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong!");
    }
};

export const signIn = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(500).json("Email and password are required!");
    }

    try {
        const user = await User.findOne({email: email}).select("name email password");

        if (!user) {
            return res.status(500).json("User was not found with this email");
        }

        const isPasswordCorrect = await bcryptjs.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(500).json("Invalid password");
        }

        const payload = {
            id: user._id
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: "1d"
        });

        return res.cookie("access_token", token, {
            httpOnly: true

        }).status(200).json("Login!");

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong!");
    }
};

export const logout = (req, res) => {
    try {
        return res.clearCookie("access_token").status(200).json("Logout!");

    } catch (error) {
        console.log(error);
        return res.status(500).json("Something went wrong!");
    }
};

export const isLoggedIn = (req, res) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.json(false);
    }

    return jwt.verify(token, process.env.JWT_SECRET_KEY, (err) => {
        if (err) {
            return res.json(false);

        } else {
            return res.json(true);
        }
    });
};