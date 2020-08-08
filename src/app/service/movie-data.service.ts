import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) { }

  getGenresList() {
    return this.http.get<any[]>("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41")
  }

  getMoviesByGenresId(genreId: number) {
    console.log("Selected in service genreId--->", genreId);
    return this.http.get<any[]>(`https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41`);
  }

  getMovieDetailsByMovieId(movieId: number) {
    console.log("movieId--->", movieId);
    return this.http.get<any[]>(`https://api.themoviedb.org/3/movie/${movieId}?api_key=68e82445c8842ba8616d0f6bf0e97a41 `)

  }


}
