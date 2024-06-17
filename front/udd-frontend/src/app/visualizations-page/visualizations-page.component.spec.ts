import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizationsPageComponent } from './visualizations-page.component';

describe('VisualizationsPageComponent', () => {
  let component: VisualizationsPageComponent;
  let fixture: ComponentFixture<VisualizationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizationsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
