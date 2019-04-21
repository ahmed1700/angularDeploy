import { Component } from '@angular/core';

@Component({
  selector: 'sample-tab',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  // Switch Case 
  // Value -- Differenct Conditions 
  viewMode : string ='Products';

  setActiveTab(viewTabName){
     this.viewMode = viewTabName;
  }
}
