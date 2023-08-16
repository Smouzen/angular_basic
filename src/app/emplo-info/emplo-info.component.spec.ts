import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploInfoComponent } from './emplo-info.component';

describe('EmploInfoComponent', () => {
  let component: EmploInfoComponent;
  let fixture: ComponentFixture<EmploInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploInfoComponent]
    });
    fixture = TestBed.createComponent(EmploInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
