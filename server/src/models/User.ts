import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

//! Muthu Code - Below
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         enum: ['Admin', 'Manager', 'Driver'],
//         default: 'Driver'
//     },
//     status: {
//         type: String,
//         enum: ['active', 'inactive'],
//         default: 'active'
//     }
// });
// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });
// userSchema.methods.matchPassword = async 
// function(enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };
// const User = mongoose.model('User', userSchema);
// module.exports = User;


//!Original Code - Below

// Define an interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: string;
  isCorrectPassword(password: string): Promise<boolean>;
}

// Define the schema for the User document
const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    }
    ,role: {
      type: String,
      enum: ['admin', 'truck', 'wh', 'user'],
      required: true,
      default: 'admin',
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

userSchema.pre<IUser>('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

const User = model<IUser>('User', userSchema);

export default User;
