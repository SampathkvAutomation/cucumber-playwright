export class User {
  constructor(
    public readonly username: string,
    public readonly email: string,
    public readonly password: string,
    public readonly org: string,
  ) {}

  static createUserA(): User {
    return new User(
      'userA',
      'user-a@org1.com',
      'securePassword1',
      'Org1',
    );
  }

  static createUserB(): User {
    return new User(
      'userB',
      'user-b@org2.com',
      'securePassword2',
      'Org2',
    );
  }
}