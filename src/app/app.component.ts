import { Component, OnInit, DoCheck } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/tab1',
      icon: 'home'
    },
    {
      title: 'Photos',
      url: '/tabs/tab2',
      icon: 'images'
    },
    {
      title: 'Contact',
      url: '/tabs/tab3',
      icon: 'person'
    },
    {
      title: 'Mail',
      url: '/tabs/tab4',
      icon: 'mail'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit() {
    this.checkSelected();
  }
  ngDoCheck(){
    this.checkSelected();
   
  }
  checkSelected(){
    const path = window.location.pathname;
    if (path !== undefined) {
      // Findindex permet de rechercher la valeur dans un tableau
      this.selectedIndex = this.appPages.findIndex( page => page.url === path );
    }
  }
}
