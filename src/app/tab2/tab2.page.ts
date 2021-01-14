import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  // On déclare une propriété tableau vide au départ
  photoList = [];

  // On récupère notre service dans le constructeur

  constructor(private photoService: PhotosService) {}
  ngOnInit(){
    console.log(this.photoService.data );
    this.photoList = this.photoService.data;
  }

}
