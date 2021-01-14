import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  public data = [
    {
      id: 12,
      url: '../../assets/photos/building.jpg',
      title:'xxx1',
      author:'xxx2',
      description:'xxxxxxxxxxx'
    },
    {
      id: 13,
      url: '../../assets/photos/madison.jpg',
      title:'xxx4',
      author:'xxxx3',
      description:''
    },
    {
      id: 14,
      url: '../../assets/photos/mountain-landscape.jpg',
      title:'xxx5',
      author:'xxx6',
      description:'xxxx'
    },
    {
      id: 15,
      url: '../../assets/photos/road.jpg',
      title:'',
      author:'',
      description:''
    }

  ];

  constructor() { }
}
