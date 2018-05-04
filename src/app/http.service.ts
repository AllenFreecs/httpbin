import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, ResponseType, ResponseContentType } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx' ;
import { Options } from 'selenium-webdriver/safari';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class HttpService {

  constructor(private http:HttpClient) { }
  apiurl:string = "https://httpbin.org";

  getOriginIP()
  {

      return this.http.get( this.apiurl + '/ip',httpOptions


    );
      // .toPromise().then(response => {}).catch(console.log)
  }

  getUtf8 ()
  {
    return this.http.get( this.apiurl + '/encoding/utf8',{responseType: 'text'})
  }


  getBase64(Base64String)
  {
    
      return this.http.get( this.apiurl + '/base64/'+Base64String,{responseType: 'text'}

      )
  }

  downloadGzip() : Observable<Blob>
  {
  //  return  this.http.get( this.apiurl + '/gzip',)
   return this.http
    .get(this.apiurl + '/gzip',
     {
      responseType: "blob",
        
    })
  }

  getHTML ()
  {
    return this.http.get( this.apiurl + '/html',{responseType: 'text'})
  }
  getImageViaAcceptHeader () : Observable<Blob>
  {
    return this.http
    .get(this.apiurl + '/image',
     { 
      headers: {'Accept': 'image/png'},
      responseType: "blob",
        
    })
    
  }
  getPNG () : Observable<Blob>
  {
    return this.http.get( this.apiurl + '/image/png',{responseType: 'blob'})
  }
  getjpeg () : Observable<Blob>
  {
    return this.http.get( this.apiurl + '/image/jpeg',{responseType: 'blob'})
  }
  getwebp (): Observable<Blob>
  {
    return this.http.get( this.apiurl + '/image/webp',{responseType: 'blob'})
  }
  getsvg () : Observable<Blob>
  {
    return this.http.get( this.apiurl + '/image/svg',{responseType: 'blob'})
  }
  getxml () : Observable<Blob>
  {
    return this.http.get( this.apiurl + '/xml',{responseType: 'blob'})
  }





}
