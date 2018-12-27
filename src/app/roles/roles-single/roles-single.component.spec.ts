import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesSingleComponent } from './roles-single.component';

describe('RolesSingleComponent', () => {
  let component: RolesSingleComponent;
  let fixture: ComponentFixture<RolesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
