import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSafeEvalComponent } from './ng-safe-eval.component';

describe('NgSafeEvalComponent', () => {
  let component: NgSafeEvalComponent;
  let fixture: ComponentFixture<NgSafeEvalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSafeEvalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgSafeEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
