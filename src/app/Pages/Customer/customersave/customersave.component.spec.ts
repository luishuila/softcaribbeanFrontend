import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersaveComponent } from './customersave.component';

describe('CustomersaveComponent', () => {
  let component: CustomersaveComponent;
  let fixture: ComponentFixture<CustomersaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
