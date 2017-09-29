import { TestBed, async, inject } from '@angular/core/testing';

import { DishDetailGuard } from './dish-detail.guard';

describe('DishDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DishDetailGuard]
    });
  });

  it('should ...', inject([DishDetailGuard], (guard: DishDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
