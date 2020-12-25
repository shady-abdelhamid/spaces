export class User {
  public readonly id: number;
  public name: string;
  public email: string;
  public imageUrl: string;
  public job?: string;

  constructor(data: any = {}) {
    const { id, name, job, first_name, last_name, avatar, email } = data;

    this.id = id;
    // use name if found
    // failover to fname lname concatination
    // of empty value
    this.name = name ? name : first_name && last_name ? `${first_name} ${last_name}` : '';

    this.email = email ? email : '';
    this.imageUrl = avatar ? avatar : '';
    this.job = job ? job : '';
  }
}
