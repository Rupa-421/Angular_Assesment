import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelXComponent } from './panel-x.component';

describe('PanelXComponent', () => {
  let component: PanelXComponent;
  let fixture: ComponentFixture<PanelXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
