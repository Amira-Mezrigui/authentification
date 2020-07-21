const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 5, max: 20 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min:7, max:30 }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);