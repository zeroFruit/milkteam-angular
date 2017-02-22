export class RandomChatting {
  _id: string;
  nickname: string;
  message: string;
  picture: string;

  constructor(nickname: string, message: string, picture: string) {
    this.nickname = nickname;
    this.message = message;
    this.picture = picture;
  }
}