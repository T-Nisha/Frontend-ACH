import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  

  constructor(private http:HttpClient)
   { 

   }
   baseUrl="http://localhost:8080";

   createPlayer(player:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}/add`,player);  
  }

   getAllPlayer():any{
      return this.http.get(`${this.baseUrl}/getAll`)

      
   }
   deletePlayer(id:number):Observable<any>{

    console.log("inside service")
    return this.http.delete(`${this.baseUrl}/deletePlayer/${id}`,{responseType:'text'});
  }

  searchPlayer(id:number):Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getOne/${id}`)
  }
 updatePlayer(player:Object):Observable<Object>
  {
    console.log("inside update service class")
    console.log(player);
    return this.http.put(`${this.baseUrl}/updatePlayer`,player);
  }
}