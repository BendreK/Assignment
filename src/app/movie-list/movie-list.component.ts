import { Component, OnInit, Input } from '@angular/core';
import { MovieDataService } from '../service/movie-data.service';
import { GenresModel } from '../Model/GenresModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  genresList: GenresModel[];
  selectedGenres: GenresModel;
  movieDataList: any[];
  genresId: number;



  constructor(private movieDataService: MovieDataService, private router: Router) { }

  ngOnInit(): void {
    this.genresList = [];
    this.getGenresList();
    this.selectedGenres = new GenresModel();
    this.movieDataList = [];

  }


  getGenresList() {
    this.movieDataService.getGenresList().subscribe(res => {
      this.genresList = res['genres'];
      console.log("this.List---->", this.genresList);

    })
  }

  onSelect(obj) {
    this.genresList.forEach(element => {
      if (element.name == obj) {
        this.genresId = element.id;
      }
    });
    this.getMoviesByGenresId();
    console.log("onSelect(selectedGenres)---->", this.genresId);
  }


  getMoviesByGenresId() {
    this.movieDataService.getMoviesByGenresId(this.genresId).subscribe(res => {
      this.movieDataList = res['results'];
      console.log("movieDataList--->", this.movieDataList);
    })
  }

  onRowClick(val) {
    console.log("valu-------->", val);
    this.router.navigate(['details', val])

  }



}
