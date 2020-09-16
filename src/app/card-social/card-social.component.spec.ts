import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSocialComponent } from './card-social.component';

describe('CardSocialComponent', () => {
  let component: CardSocialComponent;
  let fixture: ComponentFixture<CardSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
