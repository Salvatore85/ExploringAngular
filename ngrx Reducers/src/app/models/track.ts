export class Track {
  embedUrl: string;

  constructor(
    public id: string,
    public name: string,
    public artist: string,
    public album: string,
    public image: string,
    public uri: string
  ) {
    this.embedUrl = `https://embed.spotify.com/?uri=${uri}`
  }
}