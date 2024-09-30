/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreatelistComponent } from './Createlist.component';

describe('CreatelistComponent', () => {
  let component: CreatelistComponent;
  let fixture: ComponentFixture<CreatelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
