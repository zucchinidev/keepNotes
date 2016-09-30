import * as mongoose from 'mongoose';

export interface IReadRepository<Model> {
  getAll: () => mongoose.Promise<Model[]>;
  findById: (_id: string) => mongoose.Promise<Model>;
}
