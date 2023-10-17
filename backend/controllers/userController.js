// Import necessary modules and models
const User = require('../models/user');

const signUp = async (req, res) => {
    console.log('Received sign-up request with data:', req.body);
  
    const { name, email, password } = req.body;
  
    try {
      const newUser = new User({
        name,
        email,
        password
      });
  
      const savedUser = await newUser.save();
      console.log('User saved in MongoDB:', savedUser);
      res.json(savedUser);
    } catch (error) {
      console.error('Error saving user to MongoDB:', error.message);
      res.status(400).json({ error: error.message });
    }
  };
  
  module.exports = {
    signUp
  };
  