import { comparePassword, hashPassword } from "../helpers/authHelper.js"; 
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"; 



// REGISTER CONTROLLER
export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        // Validation
        if (!name) return res.status(400).send({ message: "Name is required" });
        if (!email) return res.status(400).send({ message: "Email is required" });
        if (!password) return res.status(400).send({ message: "Password is required" });
        if (!phone) return res.status(400).send({ message: "Phone number is required" });
        if (!address) return res.status(400).send({ message: "Address is required" });
        if (!answer) return res.status(400).send({ message: "Answer is required" });

        // Check if user exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).send({
                success: false,
                message: "User already registered, please login.",
            });
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Register user
        const user = await new userModel({ name, email, phone, address, password: hashedPassword ,answer,role: 0,}).save();

        res.status(201).send({
            success: true,
            message: "User registered successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in registration",
            error,
        });
    }
};

// LOGIN CONTROLLER
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).send({
                success: false,
                message: "Invalid email or password",
            });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registered",
            });
        }

        // Compare Password
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(400).send({
                success: false,
                message: "Invalid Password",
            });
        }

        // Generate JWT Token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });


        res.status(200).send({
            success: true,
            message: "Login successful",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};

//forgopasswordController

export const forgotPasswordController = async (req, res) => {
    try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }
      if (!answer) {
        res.status(400).send({ message: "answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };

// test controler
export const testController=(req,res) =>{
    res.send("Protected Routes ");
}


// import userModel from "../models/userModel.js";
// import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
// import JWT from "jsonwebtoken";

// // REGISTER CONTROLLER
// export const registerController = async (req, res) => {
//   try {
//     const { name, email, password, phone, address, answer } = req.body;

//     // Validations
//     if (!name) return res.status(400).send({ error: "Name is Required" });
//     if (!email) return res.status(400).send({ error: "Email is Required" });
//     if (!password) return res.status(400).send({ error: "Password is Required" });
//     if (!phone) return res.status(400).send({ error: "Phone number is Required" });
//     if (!address) return res.status(400).send({ error: "Address is Required" });
//     if (!answer) return res.status(400).send({ error: "Answer is Required" });

//     // Check if user exists
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).send({
//         success: false,
//         message: "Already registered, please login.",
//       });
//     }

//     // Hash password
//     const hashedPassword = await hashPassword(password);

//     // Create new user
//     const user = await new userModel({
//       name,
//       email,
//       phone,
//       address,
//       password: hashedPassword,
//       answer,
//     }).save();

//     res.status(201).send({
//       success: true,
//       message: "User registered successfully",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in registration",
//       error,
//     });
//   }
// };

// // FORGOT PASSWORD CONTROLLER
// export const forgotPasswordController = async (req, res) => {
//   try {
//     const { email, answer, newPassword } = req.body;

//     if (!email) return res.status(400).send({ message: "Email is required" });
//     if (!answer) return res.status(400).send({ message: "Answer is required" });
//     if (!newPassword) return res.status(400).send({ message: "New Password is required" });

//     // Check user
//     const user = await userModel.findOne({ email, answer });
//     if (!user) {
//       return res.status(404).send({
//         success: false,
//         message: "Wrong Email or Answer",
//       });
//     }

//     const hashed = await hashPassword(newPassword);
//     await userModel.findByIdAndUpdate(user._id, { password: hashed });

//     res.status(200).send({
//       success: true,
//       message: "Password Reset Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Something went wrong",
//       error,
//     });
//   }
// };

// // TEST CONTROLLER
// export const testController = (req, res) => {
//   try {
//     res.send("Protected Routes");
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error });
//   }
// };
