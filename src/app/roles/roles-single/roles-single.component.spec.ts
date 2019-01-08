import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesSingleComponent } from './roles-single.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RolesSingleComponent', () => {
  let component: RolesSingleComponent;
  let fixture: ComponentFixture<RolesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
       ],
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
