import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSelectComponent } from './poke-select.component';

describe('PokeSelectComponent', () => {
  let component: PokeSelectComponent;
  let fixture: ComponentFixture<PokeSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSelectComponent]
    });
    fixture = TestBed.createComponent(PokeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
