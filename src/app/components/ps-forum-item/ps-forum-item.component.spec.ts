import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSForumItemComponent } from './ps-forum-item.component';

describe('PSForumItemComponent', () => {
  let component: PSForumItemComponent;
  let fixture: ComponentFixture<PSForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
