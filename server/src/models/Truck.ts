import { Schema, model, Document } from 'mongoose';
import mongoose from 'mongoose';

interface ITruck extends Document {
  truckId: string;
  truckName: string;
  truckCapacity: number;
  driverName: string;
  status: 'Available' | 'In Transit';
  assignedWarehouse: mongoose.Types.ObjectId;
}

const truckSchema = new Schema<ITruck>(
  {
    truckId: { 
      type: String,
      required: true, 
      unique: true 
    },
    truckName: { 
      type: String,
      required: true, 
    },
    truckCapacity: { 
      type: Number,
    },
    driverName: { 
      type: String, 
      required: true 
    },
    status: {
       type: String,
       enum: ['Available', 'In Transit'], default: 'Available' 
      },
    assignedWarehouse: {
       type: mongoose.Schema.Types.ObjectId, ref: 'Warehouse' 
      },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Truck = model<ITruck>('Truck', truckSchema);

export default Truck;
