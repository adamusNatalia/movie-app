export class Movie {
    public coverImagePath: string;
    public title: string;
    public description: string;
    public genre: string;
    public rating: number;
  
    constructor(title: string, desc: string, imagePath: string, genre: string, rating: number) {
      this.title = title;
      this.description = desc;
      this.coverImagePath = imagePath;
      this.genre = genre;
      this.rating = rating;
    }
  }
  