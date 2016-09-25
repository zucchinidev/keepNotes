import {IDocument} from './document.interface';
export interface INote extends IDocument {
  id: string;
  title: string;
  value: string;
  color: string;
}
