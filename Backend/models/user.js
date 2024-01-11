const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
},{
  collection:"User"
});

const User = mongoose.model('User', userSchema);

module.exports = User;

//mongodb Username: kunalshahajilondhe
//mongodb password: dAmsH9JlXDddb811
//mongodb url : mongodb+srv://kunalshahajilondhe:dAmsH9JlXDddb811@cluster0.tiq3mvv.mongodb.net/