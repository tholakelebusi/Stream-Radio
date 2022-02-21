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
    this.stations=stations,
    ),
    this.getId
    
  }

 

  getId(id:any)
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