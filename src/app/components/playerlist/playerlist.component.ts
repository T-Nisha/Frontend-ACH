import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Player } from "../../model/player";
import { Router } from "@angular/router";
import { PlayerService } from "../../service/player.service";

@Component({
  selector:'app-playerlist',
  templateUrl:'./playerlist.component.html',
  styleUrl:'./playerlist.component.css'
})

export class PlayerlistComponent implements OnInit{

  public players:Observable<Player[]>=of([]);
    constructor(private service:PlayerService,private router:Router)
    {      
    }
    ngOnInit() {
       this.getAll();
    }
 
    getAll()
    {
      console.log("Inside class")
      this.players=this.service.getAllPlayer();
    }


    deletePlayer(id:number)
    {
      console.log("Inside delete method")
        this.service.deletePlayer(id).subscribe((data)=>{
          console.log(data);
      
          this.getAll();
        });
          
        
    }

    findPlayer(id:number)
    {
        this.router.navigate(['search',id]);
    }


    updatePlayer(id:number)
    {
      this.router.navigate(['update',id]);
    }
}