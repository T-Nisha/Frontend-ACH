import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchplayerComponent } from './searchplayer.component';

describe('SearchplayerComponent', () => {
  let component: SearchplayerComponent;
  let fixture: ComponentFixture<SearchplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
