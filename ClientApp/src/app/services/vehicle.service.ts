import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: Http) {  }

  getMakes() {
    return this.http.get('/api/makes')
    .pipe(map(res => res.json()));
  }
  getFeatures() {
    return this.http.get('/api/features')
    .pipe(map(res => res.json()));
}

}
