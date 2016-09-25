import * as mongoose from 'mongoose';

export interface IWriteRepository<Model> {
  create: (item: Model) => mongoose.Promise<Model>;
  update: (_id: string, item: Model) => mongoose.Promise<Model>;
  remove: (_id: string) => mongoose.Promise<any>;
}
