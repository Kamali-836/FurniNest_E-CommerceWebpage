const bcrypt = require('bcryptjs');
const { User, Contact } = require('../Models/UserModel');

// User signup
const signupUser = async (req, res) => {
  try {
    const { fullname, email, password, userType } = req.body;
    
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create a new user
    const newUser = new User({ 
      fullname, 
      email, 
      password: hashedPassword, 
      userType: userType || 'user' 
    });
    
    // Save the new user to the database
    await newUser.save();
    
    return res.status(201).json({ 
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        userType: newUser.userType
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// User login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    
    return res.status(200).json({ 
      message: "Login successful",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        userType: user.userType
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Password reset request
const resetPasswordRequest = async (req, res) => {
  try {
    const { email } = req.body;
    
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // In a real app, generate a reset token and send email
    return res.status(200).json({ message: "Password reset link sent to your email" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Contact form submission
const submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Create a new contact message
    const newContact = new Contact({ name, email, subject, message });
    
    // Save the contact message to the database
    await newContact.save();
    
    return res.status(201).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { 
  signupUser, 
  loginUser, 
  resetPasswordRequest, 
  submitContactForm 
};