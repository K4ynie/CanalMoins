import {Page, NavController, IONIC_DIRECTIVES} from 'ionic-angular'
import {Baseball} from './baseball'
import {Basketball} from './basketball'
import {CyclismeSurPiste} from './cyclismeSurPiste'
import {Football} from './football'
import {FootballAmericain} from './footballAmericain'
import {RallyeFrancais} from './rallyeFrancais'
import {Tennis} from './tennis'


@Page({
    //contenu de la page
    template:
        ` <ion-navbar *navbar>
    <ion-title>Choisissez votre sport..</ion-title>
  </ion-navbar>

  <ion-content class="contenu2">
  <ion-list>
    <button ion-item (click) ="catBaseball()" class="catStyle">
      <ion-icon name = "baseball" item-left></ion-icon> Baseball
    </button>
  </ion-list>
  <ion-list>
    <button ion-item (click) ="catBasketball()" class="catStyle">
      <ion-icon name = "basketball" item-left></ion-icon> Basketball
    </button>
  </ion-list>
  <ion-list>
    <button ion-item (click) ="catCycleSurPiste()" class="catStyle">
      <ion-icon name = "bicycle" item-left></ion-icon> Cyclisme sur Piste
    </button>
  </ion-list>
    <ion-list>
      <button ion-item (click) ="catFootball()" class="catStyle">
        <ion-icon name = "football" item-left></ion-icon> Football
      </button>
    </ion-list>
    <ion-list>
      <button ion-item (click) ="catFootballAm()" class="catStyle">
        <ion-icon name = "american-football" item-left></ion-icon> Football-Américain
      </button>
    </ion-list>
    <ion-list>
      <button ion-item (click) ="catRallyeFr()" class="catStyle">
        <ion-icon name = "car" item-left></ion-icon> Rallye Français
      </button>
    </ion-list>
    <ion-list>
      <button ion-item (click) ="catTennis()" class="catStyle">
        <ion-icon name = "tennisball" item-left></ion-icon> Tennis
      </button>
    </ion-list>
  </ion-content>
  `,
  directives:[IONIC_DIRECTIVES]
})

export class Categories {
    static get parameters(){
        return[[NavController]];
    }
    constructor(nav){
        this.nav = nav
    }
    catBaseball(){
        this.nav.push(Baseball)
    }
    catBasketball(){
        this.nav.push(Basketball)
    }
    catCycleSurPiste(){
        this.nav.push(CyclismeSurPiste)
    }
    catFootball(){
        this.nav.push(Football)
    }
    catFootballAm(){
        this.nav.push(FootballAmericain)
    }
    catRallyeFr(){
        this.nav.push(RallyeFrancais)
    }
    catTennis(){
        this.nav.push(Tennis)
    }


}
