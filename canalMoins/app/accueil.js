import {Page, NavController} from 'ionic-angular'
import {Categories} from './pages/categories/categories'
/**Tentative màj pour mercredi
import {Component} from './component'*/

@Page({
  //contenu de la page
  template:
  ` <ion-navbar *navbar>
    <ion-title>Canal-</ion-title>
  </ion-navbar>

  <ion-content class="contenu1Acc">
  <p>Les règles simplifiées<br> de vos<br> sports préférés!<p>
  <img src="build/css/images/Canalmoins.png">
  </ion-content>
    <button (click)="surfToCat()">Naviguer</button>

  `,
  /*Tentative màj Mercredi
  directives : [Component]*/
})
export class Accueil {
  static get parameters(){
    return[[NavController]];
  }
 constructor(nav){
   this.nav = nav
 }

 surfToCat(){
   this.nav.push(Categories)
 }
}
