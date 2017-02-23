export class RandomChatting {
  _id: string;
  displayName: string;
  msg: string;
  date: string;
  from: string;
  picture: string;

  constructor(displayName: string, msg: string, date: string, from?: string, picture?: string) {
    this.displayName = displayName;
    this.msg = msg;
    this.date = date;
    this.from = from;
    this.picture = picture;
  }
}