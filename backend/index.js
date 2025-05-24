const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://singhshantanu121:8pl1WEQm95Y1kCRz@cluster0.zh0xk.mongodb.net/popxDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected Successfully"))
  .catch((error) => {
    console.log("DB Connection Failed");
    console.error(error);
    process.exit(1);
  });

// Define a Mongoose model
const User = mongoose.model("User", {
  fullName: String,
  phoneNumber: Number,
  emailAddress: String,
  password: String,
  companyName: String,
  agency: String,
});

// API route to get all users
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// API route to add a new user
app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
