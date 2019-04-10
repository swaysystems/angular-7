import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbindingComponent } from './dbinding.component';

describe('DbindingComponent', () => {
  let component: DbindingComponent;
  let fixture: ComponentFixture<DbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
