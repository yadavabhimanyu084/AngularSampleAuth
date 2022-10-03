import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidemenuComponent } from './layout-sidemenu.component';

describe('LayoutSidemenuComponent', () => {
  let component: LayoutSidemenuComponent;
  let fixture: ComponentFixture<LayoutSidemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSidemenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSidemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
