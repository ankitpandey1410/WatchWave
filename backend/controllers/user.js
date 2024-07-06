import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

export const Login = async (req,res) => {
  try {
    const {email, password} = req.body;

    if(!email || !password) {
      return res.status(401).json({
        message: "Invalid data",
        success: false
      })
    }

    const user = await User.findOne({email});

    if(!user) {
      res.status(404).json({
        message: "Invalid credentials",
        success: false
      })
    }

    const isMatch = await bcryptjs.compare(password, user.password);

    if(!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
        success: false
      })
    }

    const tokenData = {
      id: user._id,
    }
    const token = await jwt.sign(tokenData, "dsfjdgshfkjgbrfwjrbhfb", {expiresIn: "1d"})

    return res.status(200).cookie("token", token, {httponly: true}).json({
      message: `Welcome back ${user.fullName}`,
      user,
      success: true
    })

  } catch (error) {
    console.log(error);
  }
}

export const Logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", {expiresIn: new Date(Date.now()), httponly: true}).json({
      message: "User logged out successfully !",
      success: true
    })
  } catch (error) {
    console.log(error);
  }
}

export const Register = async (req, res) => {
  try {
    const {fullName, email, password} = req.body;

    if(!fullName || !email || !password)  {
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      })
    }

    const user = await User.findOne({email});

    if(user) {
      return res.status(401).json({
        message: "This user is already registered !",
        success: false,
      })
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    })

    return res.status(201).json({
      message: "User registered successfully !",
      success: true,
    })
  } catch (error) {
    console.log(error);
  }
}