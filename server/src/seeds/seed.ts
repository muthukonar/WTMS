import db from '../config/connection.js';
import { User, Warehouse, Truck } from '../models/index.js';
//
//
import cleanDB from './cleanDB.js';

import userData from './userData.json' assert { type: 'json'};
//
import truckData from './truckData.json' assert { type: 'json'};
import warehouseData from './warehouseData.json' assert { type: 'json'};


const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();
    
    await User.create(userData);
    await Truck.create(truckData);
    await Warehouse.create(warehouseData);
    console.log('Seeding User Table completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
  

}

seedDatabase();
