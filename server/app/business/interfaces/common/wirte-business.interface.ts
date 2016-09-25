export interface IWriteBusiness<Model> {
  create: (item: Model) => Promise<Model>;
  update: (_id: string, item: Model) => Promise<Model>;
  remove: (_id: string) => Promise<any>;
}
