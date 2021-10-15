import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PotentialService {

  api_link="https://track-jobs.herokuapp.com/api/new-wishlist-entry/"

  constructor() { }
}
