import { TestBed } from '@angular/core/testing';

import { FavoritesPhotosService } from './favorites-photos.service';

describe('FavoritesPhotosService', () => {
  let service: FavoritesPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
