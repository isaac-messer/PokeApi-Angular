import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsScreenComponent } from './search-results-screen.component';

describe('SearchResultsScreenComponent', () => {
  let component: SearchResultsScreenComponent;
  let fixture: ComponentFixture<SearchResultsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsScreenComponent]
    });
    fixture = TestBed.createComponent(SearchResultsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
