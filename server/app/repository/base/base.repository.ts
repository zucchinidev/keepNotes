import {IDocument} from '../../model/interfaces/document.interface';
import {IReadRepository} from '../interfaces/read.repository.interface';
import {IWriteRepository} from '../interfaces/write.repository.interface';
import * as mongoose from 'mongoose';

export class BaseRepository<Model extends mongoose.Document> implements
  IReadRepository<Model>, IWriteRepository<Model> {
  protected model: mongoose.Model<Model>;

  private static toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }

  constructor(model: mongoose.Model<Model>) {
    this.model = model;
  }

  getAll(): mongoose.Promise<Array<Model>> {
    return this.model.find({}).exec();
  }

  findById(_id: string): mongoose.Promise<Model> {
    return this.model.findById({_id: BaseRepository.toObjectId(_id)}).exec();
  }

  create(item: Model): mongoose.Promise<Model> {
    return this.model.create(item);
  }

  update(_id: string, item: Model): mongoose.Promise<Model> {
    return this.model.update({
      _id: BaseRepository.toObjectId(_id)
    }, item).exec();
  }

  patch(_id: string, item: Model): mongoose.Promise<Object> {
    // mongoose never replaces the whole model
    return this.model.update({_id: BaseRepository.toObjectId(_id)}, item).exec();
  }

  remove(_id: string): mongoose.Promise<any> {
    return this.model.remove(({_id: BaseRepository.toObjectId(_id)})).exec();
  }
}
