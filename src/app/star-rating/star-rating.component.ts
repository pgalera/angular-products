import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  private auxRating: number;
  @Input() rating: number;
  @Output() ratingChanged = new EventEmitter<number>();

  constructor() { }

  restoreRating() {
    this.auxRating = this.rating;
  }

  setRating() {
    this.ratingChanged.emit(this.auxRating);
  }

  ngOnInit() {
    this.restoreRating();
  }

}
