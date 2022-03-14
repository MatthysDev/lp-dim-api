import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatthysDucrocqComponent } from './matthys-ducrocq.component';

describe('MatthysDucrocqComponent', () => {
  let component: MatthysDucrocqComponent;
  let fixture: ComponentFixture<MatthysDucrocqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatthysDucrocqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatthysDucrocqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
