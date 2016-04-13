import {Page, NavController, IONIC_DIRECTIVES} from 'ionic-angular'

@Page({
  template:
  `<ion-navbar *navbar>
    <ion-title>Tennis</ion-title>
  </ion-navbar>

  <ion-content class="contenu2">
    <h1>Principe</h1>
    <hr>
    <br>
    <p>
        Les matchs de tennis, qu’ils soient en simple
        (un-e contre un-e) ou en double (deux contre deux),
        ont pour but pour chaque adversaire de lancer la balle de l’autre côté du terrain à l’aide de la raquette,
        au bout d’un rebond seulement, sans la faire sortir des délimitations du terrain.
    <p>
    <br>
    <br>
    <img src="images/tennis-raquette.png">
    <br>
    <br>
    <h1>terrain</h1>
    <hr>
    <br>
    <br>
    <p>
        Où sont les lignes de fond de court ?
        Et les carrés de service ? Trouvez vos repères grâce à
        l'image ci-dessous.
    <p>
    <br>
    <br>
    <img src="images/terrain-tennis-dimension.png">
    <p>
       Les bandes latérales, appelées couloirs,
       ne sont utilisées que dans les matchs en double (2 contre 2).
       Une balle qui tombe dans le couloir est donc faute
       ("out") uniquement dans une rencontre en simple.
       Si la balle rebondit SUR les lignes qui délimitent le court,
       elle est considérée comme bonne
       (même si elle effleure la ligne de quelques millimètres).
    <p>
    <br>
    <br>
    <h1>Jeu</h1>
    <hr>
    <br>
    <br>
    <p>
        Le décompte des points
        15, 30 et 40 et jeu. C'est dans cet ordre que se comptent les points.
        Un joueur gagne un point quand son adversaire ne relance pas la balle dans la moitié de court opposée, avant le deuxième rebond.
        Imaginons un joueur Y qui a gagné ses 3 premiers points. Sa marque est alors de 40.
        Le joueur Z a un score inférieur à 40 points (ex : 40-15) : 
        le joueur Y remporte le jeu s'il gagne le point suivant.
        Le joueur Z a aussi 40 points :
        il y a égalité (40-40). Le joueur Y marque le point suivant.
        Il y a alors "avantage" pour lui (A-40). Il doit encore marquer
        un point pour remporter le jeu. S'il échoue, 
        les deux joueurs sont de nouveau à égalité (40-40). 
    <p>
    <br>
    <br>
    <br>
    <img src="images/tableau-score-tennis.png">
    <br>

    <p>
        6 jeux = 1 setPour gagner un set (on parle aussi de manche),
        il faut remporter 6 jeux et avoir une avance de 2 jeux
        minimum sur son adversaire (6-4 ou 7-5 par exemple).
    <p>
    <p>
        Si les joueurs sont à 6-6,
        un septième jeu les départage : c'est le  jeu décisif,
        "tie-break" en anglais. On compte alors les points de 1 à 7.
        Le premier joueur arrivé à 7 points remporte le set,
        à condition qu'il ait 2 points d'avance (ex : 7-5).
        Sinon, le jeu se poursuit jusqu'à ce que cette avance soit obtenue.
    <p>
    <p>
    Combien de sets pour gagner le match ?
    Deux sets gagnants pour les femmes, deux ou trois pour les hommes selon les tournois.
    Quand le score atteint 6 jeux partout dans le dernier set, 
    c'est la règle de l'avantage (deux jeux d'écart) qui s'applique et non le jeu décisif.
    A Roland Garros , 
    au même titre que les autres tournois du Grand Chelem (Open d'Australie, 
    US Open et Wimbledon), les messieurs doivent remporter 3 sets pour gagner la partie. 
    Dans les autres compétitions, les joueurs ne doivent gagner que 2 sets.
    <p>
    <p>
    Break et débreak
    Quand un joueur Z gagne le jeu alors que c'est son adversaire Y qui servait, 
    on dit qu'il y a "break". Z a "breaké" Y.
    Si ensuite, dans la même manche, 
    Y regagne un jeu sur le service de son adversaire, il y a "débreak". 
    Le joueur Y a récupéré son point, il a "debreaké" Z, qui l'avait breaké.
    <p>
    
  </ion-content>
<button (click)="catTennis()" class="buttonNav">Scroll to the top</button>
  `
})

export class Tennis{
    static get parameters(){
        return[[NavController]];
    }
    constructor(nav){
        this.nav = nav
    }

    catTennis(){
        this.nav.push(Tennis)
    }
}
