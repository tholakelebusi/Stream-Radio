import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  url: string ="http://localhost:3000/stations";
 
  constructor(private http: HttpClient) {}

  getAllStation() {
  
    return this.http.get(this.url).pipe(
      map(response => response)
  );
}

getOne(id:any) {
  return this.http.get(`${this.url}/${id}`);
  }


 move(id:Number) {
    return this.http.get(`${this.url}/next/${id}`);
    }

updateStatus(id:any,body:any)
{
  return this.http.put(`${this.url}/next/${id}`,body);
}


searchname(name:any)
  {
    return this.http.get(`${this.url}/${name}`);
  }


}
