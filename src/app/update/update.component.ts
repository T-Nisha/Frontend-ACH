import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from '../model/player';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{

  player =new Player();
  playerId:number=0;
  constructor(private service:PlayerService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit():void
  {
    this.playerId=this.route.snapshot.params['playerId'];
    this.service.searchPlayer(this.playerId).subscribe((data)=>{
  
      this.player=data;
    })  
  }
  onSubmit(){
    this.updatePlayer();

  }
  updatePlayer(){
    this.service.updatePlayer(this.player).subscribe((data)=>{
      console.log(data);
      this.goToList();
    })
  }

  goToList()
  {
    this.router.navigate(['get']);
  }
}