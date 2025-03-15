import { Schema, model, Document } from 'mongoose';


//! Muthu Code - Below
// const mongoose = require('mongoose');
// const truckSchema = new mongoose.Schema({
//     truckId: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     driverName: {
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['Available', 'In Transit'],
//         default: 'Available'
//     },
//     assignedWarehouse: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Warehouse'
//     }
// });
// const Truck = mongoose.model('Truck', truckSchema);
// module.exports = Truck;




interface ITruck extends Document {
  make: string;
  tmodel: string;
  year: number;
  size: string;
  miles: number;
  driver?: string | null;
}

const truckSchema = new Schema<ITruck>(
  {
    make: {
      type: String,
      required: true,
      trim: true,
    },
    tmodel: {
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





const Truck = model<ITruck>('User', truckSchema);

export default Truck;