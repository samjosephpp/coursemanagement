const express = require('express')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require("dotenv").config();

exports.registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        //check if admin exists
        let admin = await User.findOne({ email });
        if (admin) {
            return res.status(400).json({ message: "Admin exists" })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        admin = new User({
            name, email, password: hashedPassword, role: "admin",
            createdBy: null
        });

        await admin.save();
        res.status(201).json({ message: "Admin created" })



    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

exports.login = async (req, res) => {

    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
                return res.status(400).json({message: "User doesnot exists"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid credentials"})
        }

        const token = jwt.sign({id : user.id, role:user.role, 
            email: user.email}, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.status(200).json({message: "login successful", token, user})
        
    } catch (error) {
        return res.status(500).json({message: "Internal server Error", error})
    
    }
}