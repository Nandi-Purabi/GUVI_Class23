import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './modal';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  urlData:Array<URL>=[];

  constructor(private http:HttpClient) { }

  saveUrl(data:URL){
    return this.http.post(`https://616d5cea6dacbb001794c9ad.mockapi.io/URL`,data);
  }

  getAllUrl(){
    return this.http.get<Array<URL>>(`https://616d5cea6dacbb001794c9ad.mockapi.io/URL`);
  }

  updateCount(data:URL,id?:number){
    return this.http.put(`https://616d5cea6dacbb001794c9ad.mockapi.io/URL/${id}`,data);
  }
}
