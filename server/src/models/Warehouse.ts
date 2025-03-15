import { Schema, model, Document } from 'mongoose';

interface IItem {
  itemName: string;
  quantity: number;
  arrivalDate: Date;
}

interface IWarehouse extends Document {
  name: string;
  location: string;
  capacity: number;
  items: IItem[];
}

const warehouseSchema = new Schema<IWarehouse>(
  {
    name: { 
      type: String, 
      required: true 
    },
    location: { 
      type: String, 
      required: true 
    },
    capacity: {
       type: Number,
      required: true 
    },
    items: [
      {
        itemName: {
           type: String,
           required: true 
          },
        quantity: {
           type: Number, 
           required: true 
          },
        arrivalDate: {
           type: Date, 
           required: true 
          },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Warehouse = model<IWarehouse>('Warehouse', warehouseSchema);

export default Warehouse;
