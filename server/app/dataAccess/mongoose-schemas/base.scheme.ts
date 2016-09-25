import * as mongoose from 'mongoose';
import {DataBaseConnect} from '../data-base-connect';


export class BaseScheme {
  dataBaseInstance: any;
  dataBaseConnection: mongoose.Connection;

  static createSchema(params: Object): mongoose.Schema {
    return new mongoose.Schema(params);
  }

  constructor() {
    DataBaseConnect.connect();
    this.dataBaseConnection = DataBaseConnect.dataBaseConnection;
    this.dataBaseInstance = DataBaseConnect.dataBaseInstance;
  }
}
