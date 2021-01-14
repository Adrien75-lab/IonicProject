import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService} from '../services/photos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  // On récupère la route active pour le paramètre id
  // On récupère notre photo service
  isFavorite: boolean = false;

  constructor(
    private activatedRoute:ActivatedRoute, 
    private photoService: PhotosService) { }
    // On definit l'index du tableau de photo à 0
    photoIndex = 0;
    // On déclare notre élément pour l'utiliser dans la page détail
    photoDetails = this.photoService.data[this.photoIndex]

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      
      
      // On recherche l'index du tableau de photos correspondant a l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex( item => item.id == 
      params.id );

      this.photoDetails = this.photoService.data[this.photoIndex ];
      

    })
    
    
    
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.isFavorite = false;
      // TODO persist data
    } else {
      this.isFavorite = true;
      // TODO persist data
    }
  }
  

}
