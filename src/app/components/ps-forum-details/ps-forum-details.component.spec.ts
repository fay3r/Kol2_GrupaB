import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSForumDetailsComponent } from './ps-forum-details.component';

describe('PSForumDetailsComponent', () => {
  let component: PSForumDetailsComponent;
  let fixture: ComponentFixture<PSForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
