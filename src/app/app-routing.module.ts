import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';
import { SearchplayerComponent } from './searchplayer/searchplayer.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    path:'add',
    component:CreateplayerComponent 
  },
  {
    path:'get',
    component:PlayerlistComponent
  },
  {
    path:'search/:playerId',
    component:SearchplayerComponent
  },
  
  { path: 'update/:playerId', 
    component: UpdateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
