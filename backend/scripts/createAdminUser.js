require("dotenv").config();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const connectDB = require('../config/db'); // Import the connectDB function

// Connect to MongoDB using the connectDB function
connectDB();

// User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: String,
});

// User model
const User = mongoose.model('User', userSchema);

// Create an admin user
// async function createAdmin() {
//   const hashedPassword = await bcrypt.hash('Raba@123!NIG', 10); // Replace 'password' with your admin password
//   const adminUser = new User({
//     email: 'admin@example.com',
//     password: hashedPassword,
//     role: 'admin',
//   });

//   try {
//     await adminUser.save();
//     console.log('Admin user created');
//     mongoose.disconnect(); // Disconnect after operation is complete
//   } catch (err) {
//     console.log('Error creating admin user:', err);
//     mongoose.disconnect(); // Disconnect in case of error
//   }
// }

// // Call the function to create the admin user
// createAdmin();


const createAdminUser = async () => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if an admin user already exists
    const existingAdmin = await User.findOne({ email: "raba1@gmail.com" });
    if (existingAdmin) {
      console.log("Admin user already exists.");
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash("Raba@12", 10);

    // Create the admin user
    const adminUser = new User({
      email: "raba@gmail.com",
      password: hashedPassword,
      role: "admin",
    });

    const savedUser = await adminUser.save();
    console.log("Admin user created successfully:", savedUser);
  } catch (error) {
    console.error("Error creating admin user:", error);
  } finally {
    mongoose.connection.close();
  }
};

createAdminUser();
