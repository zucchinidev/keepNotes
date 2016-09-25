import {IReadController} from '../common/read-controller.interface';
import {IWriteController} from '../common/write-controller.interface';

export interface IBaseController extends IReadController, IWriteController {}
