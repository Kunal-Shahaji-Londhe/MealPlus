const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const corsOptions = {
  origin: '*',
};
const User = require('./models/user'); // Create a user model

const app = express();
app.use(express.json());
//app.use(cors());
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect('mongodb+srv://kunalshahajilondhe:dAmsH9JlXDddb811@cluster0.tiq3mvv.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {console.log("Connected to Database");}).catch((e) => console.log(e));

// Register a user
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password : hashedPassword});
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user');
  }
});

// Login and generate a JWT
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).send('User not found');
  }

  const passwordValid = await bcrypt.compare(password, user.password);

  if (!passwordValid) {
    return res.status(401).send('Invalid password');
  }

  const token = jwt.sign({ username: user.username }, 'your_secret_key');
  res.send({ token });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
