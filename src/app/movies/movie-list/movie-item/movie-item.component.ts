import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {

  // get  movie from movie-list
  @Input() movie: Movie;
  // send data to movie-list
  @Output() movieSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  // emit
  onSelected() {
    this.movieSelected.emit();
  }

}
