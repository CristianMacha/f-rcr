import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightScreenComponent } from './eight-screen.component';

describe('EightScreenComponent', () => {
  let component: EightScreenComponent;
  let fixture: ComponentFixture<EightScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
