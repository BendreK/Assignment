import { Component, OnInit, Input } from '@angular/core';
import { MovieDataService } from '../service/movie-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetailsList: any;
  tableshow: boolean = false;
  movieId: number;

  val: any;
  constructor(private movieDataService: MovieDataService, private router: ActivatedRoute,
    private myrouter: Router) { }

  ngOnInit(): void {
    this.movieDetailsList = [];
    this.tableshow = false;
    this.val = this.router.snapshot.paramMap.get('id');
    console.log(this.val);
    this.getMovieDetalis();
  }



  getMovieDetalis() {
    console.log("this.val---->", this.val);

    this.movieDataService.getMovieDetailsByMovieId(this.val).subscribe(res => {
      this.movieDetailsList = res;
      this.tableshow = true;
      console.log("this.movieDetailsList--->", this.movieDetailsList);

    })
  }


}
