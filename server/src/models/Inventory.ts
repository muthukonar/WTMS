import { Schema, model, Document } from 'mongoose';

interface IInventory extends Document {
  manufacturer: string;
  name: string;
  quantity: number;
  size: number;
  expiration: Date;
  type: string;
}

const inventorySchema = new Schema<IInventory>(
  {
    manufacturer: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    expiration: {
      type: Date,
      required: true,
    },
    type:{
        type:String,
        required:true
    }
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);





const Inventory = model<IInventory>('User', inventorySchema);

export default Inventory;