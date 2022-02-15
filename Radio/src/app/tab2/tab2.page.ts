import { Component } from '@angular/core';
import { StationsService } from '../services/stations.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  favourite:any;
  constructor(private radioService:StationsService) {}

  ngOnInit(): void {
    let id=localStorage.getItem("favourite");
    
    this.radioService.getOne(id).subscribe((stations)=>
    this.favourite=stations
    );
  }
 


}
