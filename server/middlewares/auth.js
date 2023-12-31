import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const requireSignin = (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    // User model, findyById - mongoose function
    if (user.role !== 1) {
      return res.status(401).send("Unautorized");
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};
