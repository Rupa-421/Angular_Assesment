import { Component } from '@angular/core';

interface InputTab {
  value: string;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor() { }

  
  tabs: InputTab[] = [{ value: '' }];
  submittedValues: string[] = [];
  addNewTab() {
    this.tabs.push({ value: '' });
  }

  updateTabValue(index: number, value: string) {
    this.tabs[index].value = value;
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  submitTabs() {
    this.submittedValues = this.tabs.map(tab => tab.value);
    let res_json={};
    for(let i=0;i<this.submittedValues.length;i++){
let value=this.submittedValues[i];
res_json["PhoneNumber"+(i+1).toString()]=value;
    }
    console.log(res_json);
  }
}
