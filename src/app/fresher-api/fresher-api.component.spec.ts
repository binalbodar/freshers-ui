import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherApiComponent } from './fresher-api.component';

describe('FresherApiComponent', () => {
  let component: FresherApiComponent;
  let fixture: ComponentFixture<FresherApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FresherApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FresherApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
