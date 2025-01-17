import { FoodRowComponent } from './food-row.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RatingPipe } from '../../pipe/rating.pipe';
import { By } from '@angular/platform-browser';
import { inputItem } from './food-row.test';

describe('Food Row Integration Test', () => {
  let fixture: ComponentFixture<FoodRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodRowComponent, RatingPipe],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(FoodRowComponent);
    fixture.componentInstance.food = { name: 'Pad Thai', rating: 5 };
    // import test data from external file
    // fixture.componentInstance.food = inputItem;
    fixture.detectChanges();
  });

  it('should have the correct food item', () => {
    expect(fixture.componentInstance.food.name).toEqual('Pad Thai');
  });

  it('should render the food name', () => {
    expect(
      fixture.nativeElement.querySelector('#itemName').textContent
    ).toContain('Pad Thai');

    expect(
      fixture.debugElement.query(By.css('#itemName')).nativeElement.textContent
    ).toContain('Pad Thai');
  });
});
