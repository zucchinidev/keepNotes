import {IDocument} from './document.interface';
export interface IUser extends IDocument {
  name: string;
  password: string;
  email: string;
  admin: boolean;
}
