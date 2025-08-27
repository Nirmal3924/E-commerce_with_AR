import jwt from "jsonwebtoken";  
import dotenv from "dotenv";
import userModel from "../models/userModel.js";

dotenv.config();

// Middleware to verify JWT token
export const requireSignIn = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).send({ success: false, message: "Unauthorized: No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store user info in req.user
        next(); // Proceed to the next middleware or controller
    } catch (error) {
        console.log(error);
        return res.status(401).send({ success: false, message: "Unauthorized: Invalid token" });
    }
};

// Middleware to check if user is an admin
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (!user || user.role !== 1) {
            return res.status(403).send({
                success: false,
                message: "Unauthorized Access: Admins only",
            });
        }
        next(); // Proceed if admin
    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "Server Error" });
    }
};
