export default class Constants {
  static DB_CONNECTION_STRING: string = 'mongodb://localhost:27017/keepNotes';
  // Example: 'mongodb://db.your.domain:PORT/DB_NAME'
}
Object.seal(Constants);
