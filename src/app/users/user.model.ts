export class User {
  public readonly id: number;
  public name: string;
  public email: string;
  public imageUrl: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.first_name && data.last_name ?
      `${data.first_name} ${data.last_name}` : '';
    this.email = data.email ? data.email : '';
    this.imageUrl = data.avatar ? data.avatar : '';
  }
}
