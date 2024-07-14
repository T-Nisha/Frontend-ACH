import { Component } from '@angular/core';
import { Player } from '../../model/player';
import { PlayerService } from '../../service/player.service';


@Component({
  selector: 'app-createplayer',
  templateUrl: './createplayer.component.html',
  styleUrl: './createplayer.component.css'
})
export class CreateplayerComponent 
{
  service: any;

  constructor(private playerService:PlayerService){} 
  player =new Player();
  onSubmit(){
    console.log("save")
    this.save();
  }
  save(){
    this.service.createplayer(this.player).subscribe();
  }
 }


