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
    expect(sortForm.textContent).toContain('Sort By:');
  });

  it ('should find select tag with fixture.debugElement.nativeElement', () => {
    const selectDe: DebugElement = fixture.debugElement;
    const selectEl: HTMLElement = selectDe.nativeElement;
    const select = selectEl.querySelector('select');
    expect(select.textContent).toContain('Alphabetical Order');
    expect(select.textContent).toContain('Creation Date');
  });

  it('should find "Sort By" label with fixture.debugElement.nativeElement', () => {
    const labelDe: DebugElement = fixture.debugElement;
    const labelEl: HTMLElement = labelDe.nativeElement;
    const label = labelEl.querySelector('#sortByLabel');
    expect(label.textContent).toEqual('Sort By:');
  });

  it('should find submit function for sort form with fixture.debugElement.nativeElement', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('#sortButton');
    expect(button.textContent).toEqual('Submit');
  });

  it('should register a click event/call onSortButtonclick() when sort button clicked', async(() => {
    spyOn(component, 'onSortButtonClick');
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button: HTMLElement = buttonEl.querySelector('#sortButton');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onSortButtonClick).toHaveBeenCalled();
    });
  }));

  it('should have currentSortOption equal to "Alphabetical Order" on initialization', () => {
    fixture.detectChanges();
    spyOn(component, 'currentSortOption');
    expect(currentSortOption).toEqual('Alphabetical Order');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
