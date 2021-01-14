import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService} from '../services/photos.service';
import { StorageService} from '../services/storage.service';


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
    private photoService: PhotosService,
    private storageService: StorageService) { }
    // On definit l'index du tableau de photo à 0
    photoIndex = 0;
    // On déclare notre élément pour l'utiliser dans la page détail
    photoDetails = this.photoService.data[this.photoIndex];
    // le tableau des favoris est vide au départ
    favArray = [] ;
    // c'est la méthode d'ajout qui récup les données en mémoire
    // avant d'ajouter la photo
    async addToFavorites(){
      const data = await this.storageService.getFavPhotos();
      this.favArray = data ? data : [] ;
      this.favArray.push(this.photoDetails);
      this.storageService.setFavPhotos(this.favArray);
      
    }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      
      
      // On recherche l'index du tableau de photos correspondant a l'id récupéré en paramètre
      this.photoIndex = this.photoService.data.findIndex( item => item.id == 
      params.id );

      this.photoDetails = this.photoService.data[this.photoIndex ];
      // On recherche si cette photo est présente dans les favoris
      this.storageService.getFavById( params.id ).then((index) => {
        console.log('Laphoto est dans les favoris ?');

      })

    });
    
    
    
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
