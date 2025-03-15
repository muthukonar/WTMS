//Todo: edit with Muthu's code

import { Schema, model, Document } from 'mongoose';

//! Muthu Code - Below
// const mongoose = require('mongoose');
// const warehouseSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     capacity: {
//         type: Number,
//         required: true
//     },
//     items: [{
//         itemName: {
//             type: String,
//             required: true
//         },
//         quantity: {
//             type: Number,
//             required: true
//         },
//         arrivalDate: {
//             type: Date,
//             required: true
//         }
//     }]
// });
// const Warehouse = mongoose.model('Warehouse', 
// warehouseSchema);
// module.exports = Warehouse;



//! Original Code - Below

interface IWarehouse extends Document {
  make: string;
  imodel: string;
  year: number;
  size: string;
  miles: number;
  driver?: string | null;
}

const warehouseSchema = new Schema<IWarehouse>(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    imodel: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    size:{
        type:String,
        required:true
    },
    miles:{
        type:Number,
        required:true
    },
    driver:{
        type:String,
        required:false
    }
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);





const Warehouse = model<IWarehouse>('User', warehouseSchema);

export default Warehouse;