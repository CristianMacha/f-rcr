import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenScreenComponent } from './seven-screen.component';

describe('SevenScreenComponent', () => {
  let component: SevenScreenComponent;
  let fixture: ComponentFixture<SevenScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevenScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
