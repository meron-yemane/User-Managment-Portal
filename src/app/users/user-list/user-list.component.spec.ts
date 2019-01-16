import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ UserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should find user sort form with fixture.debugElement.nativeElement', () => {
    const sortFormDe: DebugElement = fixture.debugElement;
    const sortFormEl: HTMLElement = sortFormDe.nativeElement;
    const sortForm = sortFormEl.querySelector('#sortForm');
    expect(sortForm.textContent).toContain('Sort By');

  });

  it('should find "Sort By" label with fixture.debugElement.nativeElement', () => {
    const labelDe: DebugElement = fixture.debugElement;
    const labelEl: HTMLElement = labelDe.nativeElement;
    const label = labelEl.querySelector('#sortByLabel');
    expect(label.textContent).toEqual('Sort By');
  });

  it('should register a click event with sort button', async(() => {


  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
