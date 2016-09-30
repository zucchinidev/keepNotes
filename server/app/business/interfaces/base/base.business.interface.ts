import {IReadBusiness} from '../common/read.business.interface';
import {IWriteBusiness} from '../common/wirte.business.interface';
import {IDocument} from '../../../model/interfaces/document.interface';
import {BaseRepository} from '../../../repository/base/base.repository';


export interface IBaseBusiness<T> extends IReadBusiness<T>, IWriteBusiness<T> {
  repository: BaseRepository<IDocument>;
}
