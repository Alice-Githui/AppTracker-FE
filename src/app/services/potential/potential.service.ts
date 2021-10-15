import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Potential} from '../../models/models/potential.model'

const api_link="https://track-jobs.herokuapp.com/api/new-wishlist-entry/"

@Injectable({
  providedIn: 'root'
})

export class PotentialService {


  constructor(private http:HttpClient) { }

  create(data:any):Observable<any>{
    return this.http.post(api_link, data);

  }
}
