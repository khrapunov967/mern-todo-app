import jwt from "jsonwebtoken";
import "dotenv/config";

export const checkAuth = (req, res, next) => {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(500).json("No token");
    }

    return jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedPayload) => {
        if (err) {
            return res.status(500).json("Invalid token");

        } else {
            req.user = decodedPayload;
            return next();
        }
    });
};