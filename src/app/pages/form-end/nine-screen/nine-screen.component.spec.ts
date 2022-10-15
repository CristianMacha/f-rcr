import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NineScreenComponent } from './nine-screen.component';

describe('NineScreenComponent', () => {
  let component: NineScreenComponent;
  let fixture: ComponentFixture<NineScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NineScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NineScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
