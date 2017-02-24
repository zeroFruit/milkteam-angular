export class Video {
  _id: string;
  videoId: string;
  title: string;
  desc: string;
  champion: string;
  type: string;
  url: string;
  position: string;
  tier: string;
  attribute: string;
  owner: string;
  duration: string;
  tag: string;
  when: string;

  constructor(videoId?: string, title?: string, desc?: string, chanpion?: string, url?: string, tag?: string, when?: string) {
    this.videoId = videoId;
    this.title = title;
    this.desc = desc;
    this.champion = chanpion;
    this.url = url;
    this.tag = tag;
    this.when = when;
  }

  isSetForUpload() {
    if(this.title
      && this.desc
      && this.champion
      && this.type
      && this.url
      && this.position
      && this.tier
      && this.attribute
    ){
      return true;
    }
    return false;
  }
}