import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Output() movieWasSelected = new EventEmitter<Movie>();
  movies: Movie[] = [
    new Movie('Se7en', 
              'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.', 
              'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
              'Crime, Drama, Mystery',
              8.3),
    new Movie('Intouchables', 
              'After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.', 
              'https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
              'Biography, Comedy, Drama',
              8.7),
    new Movie('The Green Mile', 
              'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.', 
              'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg',
              'Crime, Drama, Fantasy ',
              8.6),
    new Movie('Pulp Fiction', 
              'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 
              'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,686,1000_AL_.jpg',
              'Crime, Drama',
              8.6),
    new Movie('Gladiator', 
              'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 
              'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
              'Crime, Drama',
              8.6)
  ];
  constructor() { }

  ngOnInit() {
  }

  onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
   }

}
