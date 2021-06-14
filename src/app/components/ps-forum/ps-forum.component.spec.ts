import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSForumComponent } from './ps-forum.component';

describe('PSForumComponent', () => {
  let component: PSForumComponent;
  let fixture: ComponentFixture<PSForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
