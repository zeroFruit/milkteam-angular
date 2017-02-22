export class User {
  _id: string;
  email: string;
  password: string;
  displayName: string;
  tokens: string;

  constructor(email: string, password: string, displayName?: string, tokens?: string) {
    this.email = email;
    this.password = password;
    this.displayName = displayName;
    this.tokens = tokens;
  }
}