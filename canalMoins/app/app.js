import 'es6-shim';
import {App, Platform} from 'ionic-angular'
import {StatusBar} from 'ionic-native'
import {TabsPage} from './pages/tabs/tabs'
//import page d'acceuil
import {Accueil} from './accueil'
/* Tentative Màj POUR mercredi
import {HTTP_PROVIDERS} from 'angular2/http'
import * as rx from 'rxjs'*/

/*Coeur de l'appli*/
@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  /*Màj pour mercredi
  viewProviders: [HTTP_PROVIDERS],*/
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) { // appel de la page au lancement
    this.rootPage = Accueil;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
