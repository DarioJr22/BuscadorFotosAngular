import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibImgComponent } from './exib-img.component';

describe('ExibImgComponent', () => {
  let component: ExibImgComponent;
  let fixture: ComponentFixture<ExibImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExibImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
