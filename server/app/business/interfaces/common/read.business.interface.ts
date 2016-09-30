export interface IReadBusiness<Model> {
  getAll: () => Promise<Array<Model>>;
  findById: (id: string) => Promise<Model>;
}
