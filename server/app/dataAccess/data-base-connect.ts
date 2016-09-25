import * as mongoose from 'mongoose';
import Constants from '../../config/constants/constants';

export class DataBaseConnect {
  public static dataBaseConnection: mongoose.Connection;
  public static dataBaseInstance: any;

  static connect() {
    if (typeof DataBaseConnect.dataBaseInstance !== 'undefined') {
      return DataBaseConnect.dataBaseInstance;
    }
    DataBaseConnect.dataBaseConnection = mongoose.connection;
    DataBaseConnect.dataBaseInstance = mongoose.connect(Constants.DB_CONNECTION_STRING);
    DataBaseConnect.dataBaseConnection.on('error', console.log.bind(console, 'console error: '));
    DataBaseConnect.dataBaseConnection.on('open', () => console.log('Connected to mongodb'));
  }
}
