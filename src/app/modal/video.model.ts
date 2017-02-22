export class Video {
  _id: string;
  videoId: string;
  title: string;
  desc: string;
  tag: string;
  when: string;

  constructor(videoId: string, title: string, desc: string, tag?: string, when?: string) {
    this.videoId = videoId;
    this.title = title;
    this.desc = desc;
    this.tag = tag;
    this.when = when;
  }
}