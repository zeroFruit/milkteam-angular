export class BattleChatting {
  _id: string;
  displayName: string;
  msg: string;
  date: string;
  from: string;
  picture: string;
  side: string;

  constructor(displayName: string, msg: string, date: string, side: string, from?: string, picture?: string) {
    this.displayName = displayName;
    this.msg = msg;
    this.date = date;
    this.side = side;
    this.from = from;
    this.picture = picture;
  }
}