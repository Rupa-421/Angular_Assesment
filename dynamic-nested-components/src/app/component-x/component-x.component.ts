import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
})
export class ComponentXComponent {
  @Input() panelName: string = '';
  @Output() removeComponentX = new EventEmitter<void>();

  componentsY: any[] = [];

  addComponentY() {
    this.componentsY.push({});
  }
}
