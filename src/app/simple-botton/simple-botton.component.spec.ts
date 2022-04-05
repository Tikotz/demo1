import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBottonComponent } from './simple-botton.component';

describe('SimpleBottonComponent', () => {
  let component: SimpleBottonComponent;
  let fixture: ComponentFixture<SimpleBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
