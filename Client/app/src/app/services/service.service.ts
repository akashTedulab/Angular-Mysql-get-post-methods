import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'http://localhost:5001'
  constructor(private http: HttpClient) { }
  user(){
    return this.http.get(this.url)
  }
  saveUsers(data:any)
  {
    return this.http.post(this.url,data)
  }
}
