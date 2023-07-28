import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-x',
  templateUrl: './panel-x.component.html',
})
export class PanelXComponent implements OnInit {
  componentsX: any[] = [];

  ngOnInit() {}

  addComponentX() {
    this.componentsX.push({});
  }

  removeComponentX(index: number) {
    this.componentsX.splice(index, 1);
  }

  addComponentY(xIndex: number) {
    if (!this.componentsX[xIndex].componentsY) {
      this.componentsX[xIndex].componentsY = [];
    }
    this.componentsX[xIndex].componentsY.push({});
  }
}
