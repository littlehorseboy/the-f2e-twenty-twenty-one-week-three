import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaiwanBusEClickComponent } from './taiwan-bus-e-click.component';

describe('TaiwanBusEClickComponent', () => {
  let component: TaiwanBusEClickComponent;
  let fixture: ComponentFixture<TaiwanBusEClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaiwanBusEClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaiwanBusEClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
