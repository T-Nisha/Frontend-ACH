import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../service/player.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../model/player';

@Component({
  selector: 'app-searchplayer',
  templateUrl: './searchplayer.component.html',
  styleUrl: './searchplayer.component.css'
})
export class SearchplayerComponent implements OnInit {
  constructor(private service:PlayerService,private router:ActivatedRoute){}

  player:Player=new Player();
  playerId:number=0;
  ngOnInit(){
    this.player=new Player();
     this.playerId=this.router.snapshot.params['playerId'];
     this.service.searchPlayer(this.playerId).subscribe((data)=>{

  this.player=data;
  })
}
}
