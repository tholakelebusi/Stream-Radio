import { Component } from '@angular/core';
import { StationsService } from '../services/stations.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  stations:any;
  selected:any;
  selectedid:boolean=false
  notselected:boolean=true
  nextb:any;
  playbutton:boolean=false;
  pausebutton:boolean=true;
  searched: Object;

 name:any;

  employees: any;
  constructor(private staionService:StationsService) { }



  ngOnInit(): void {
    this.staionService.getAllStation().subscribe((stations)=>
    this.stations=stations
    
    ),
    this.getId
   
  }

 

  getId(id:number)
  {
    localStorage.setItem("numbers",id.toString());
    console.log(id);
    
  this.selectedid=true;
  this.notselected=false
    
   
    this.staionService.move(id).subscribe((details)=>
    {
this.selected=details;
console.log(this.selected);

    })
  
  }


  //next button
  next()
  {
    this.selectedid=true;
    this.notselected=false
    const id=Number(localStorage.getItem("numbers"));
   
  
    console.log(id);
    
    this.getId(Number(id)+1)
   
      let moven=id+1;
localStorage.removeItem('numbers');
localStorage.setItem("numbers",moven.toString());
   

  }


  back()
  {
    
    this.selectedid=true;
    this.notselected=false
    const id=Number(localStorage.getItem("numbers"));
   
  
    console.log(id);
    
    this.getId(Number(id)-1)
   
      let moven=id-1;
localStorage.removeItem('numbers');
localStorage.setItem("numbers",moven.toString());
    
  }

  playpause()
{
  console.log("pressed");
  this.pausebutton=false;
this.playbutton=true;

}
pauseplay()
{
 
  this.pausebutton=true;
this.playbutton=false;

}

favourite(id:any)
{

localStorage.setItem("favourite",id);

}
}
// <button id="set_radio_button" style="display: none;" played="1" listeners="295" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://playerservices.streamtheworld.com/api/livestream-redirect/FM947_SC?dist=onlineradiobox" streamtype="mp3" radioid="za.947" radioimg="//cdn.onlineradiobox.com/img/l/0/11380.v7.png" radioname="947"></button>
// <button id="set_radio_button" style="display: none;" played="1" listeners="295" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://playerservices.streamtheworld.com/api/livestream-redirect/FM947_SC?dist=onlineradiobox" streamtype="mp3" radioid="za.947" radioimg="//cdn.onlineradiobox.com/img/l/0/11380.v7.png" radioname="947"></button>
// <button id="set_radio_button" style="display: none;" played="1" listeners="112" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://iceant.antfarm.co.za/Bosveld" streamtype="mp3" radioid="za.bosveldstereo" radioimg="//cdn.onlineradiobox.com/img/l/2/11682.v16.png" radioname="Bosveld Stereo"></button>
// <button id="set_radio_button" style="display: none;" played="0" listeners="63" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="http://radiostream.co.za:9104/;" streamtype="mp3" radioid="za.bokradio" radioimg="//cdn.onlineradiobox.com/img/l/7/867.v3.png" radioname="Bok Radio"></button>
// <button id="set_radio_button" style="display: none;" played="0" listeners="15" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://edge.iono.fm/xice/ecr_live_medium.aac" streamtype="mp3" radioid="za.ecr" radioimg="//cdn.onlineradiobox.com/img/l/8/268.v4.png" radioname="East Coast Radio"></button>
// <button id="set_radio_button" style="display: none;" played="1" listeners="18" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://playerservices.streamtheworld.com/api/livestream-redirect/MUNGANALONENEAAC.aac?dist=onlineradiobox" streamtype="mp3" radioid="za.munghana" radioimg="//cdn.onlineradiobox.com/img/l/7/857.v8.png" radioname="Munghana Lonene FM"></button>
// <button id="set_radio_button" style="display: none;" played="0" listeners="54" class="b-play station_play" aria-label="Listen live" title="Listen to radio" stream="https://playerservices.streamtheworld.com/api/livestream-redirect/METROFMAAC.aac?dist=onlineradiobox" streamtype="mp3" radioid="za.metrofm" radioimg="//cdn.onlineradiobox.com/img/l/9/839.v15.png" radioname="Metro FM"></button>