import {Page, NavController, IONIC_DIRECTIVES} from 'ionic-angular'


@Page({
    template: /* Je sais que je dois faire appel à ma balise pour chaque parti seulement ça ne voulait pas fonctionner*/
        `<ion-navbar *navbar>
    <ion-title>Baseball</ion-title>
  </ion-navbar>

  <ion-content class="contenu2">
  <h1>Principe</h1>
 <hr>
   <p>
     Le baseball est un sport unisexe,
     il peut être pratiqué aussi bien par des hommes que par des femmes.
     Il oppose deux équipes de 9 joueurs pendant 9 manches durant lesquelles les équipes deviennent alternativement défensives ou offensives.
     Le but est donc de marquer plus de point que l’adversaire. Un match dure entre 3 et 4h.
   <p>
   <br>
   <br>
 <h1>Terrain</h1>
 <hr>
 <br>
   <img src="images/Baseball-terrain.jpg">
   <p>
     La zone de jeu est délimitée par une ligne blanche de chaque côté.
     Elle est composée d’un champ intérieur en terre battue et d’un champ extérieur en gazon.
   <p>
   <br>
   <p>
     Dans le champ intérieur,
     on retrouve les trois bases ainsi que la boîte du batteur dans laquelle se situe le marbre,
     qui est la base principale, en forme de maison, d’où le batteur part et où il doit revenir pour marquer un point.
     La zone située entre les bases est en gazon et s’appelle le diamant en raison de sa forme caractéristique.
     Au centre du diamant se trouve un monticule de terre battue, qui est l’endroit d’où le lanceur enverra la balle.
   <p>
   <br>
   <p>
     A l’extérieur de la zone de jeu,
     on trouve principalement les boîtes des entraîneurs de première et troisième base qui via des signaux peuvent donner des informations aux batteurs et coureurs,
     ainsi que les abris des joueurs qui sont des bancs couverts dans lesquels les joueurs, n’étant pas sur le terrain, attendent leur tour de jeu.
   <p>
 <br>
 <br>

 <h1>Les postes</h1>
 <hr>
   <p>
     Pour l’équipe devant défendre, le lanceur,
     se place sur le monticule qui lui est réservé au centre du diamant et le receveur s’installe derrière le marbre au fond de la boîte du batteur.
     Quatre défenseurs s’installent dans le champ intérieur, un à chaque base ainsi qu’un situé entre la deuxième et la troisième base.
     Pour finir, trois joueurs se place dans le champ extérieur, un a gauche, un au centre et un a droite.
   <p>
   <br>
   <p>
     Pour l’équipe qui attaque,
     le premier batteur s’installe dans la boîte qui lui est réservé et les entraîneurs de première et troisième base se positionnent dans leur boîte.
   <p>
   <br>
   <br>
   <img src="images/baseball-postes.png">
   <br>
   <br>

 <h1>Le jeu</h1>
 <hr>
 <p>
   Une partie de baseball se déroule en 9 manches, chaque équipe est tour à tour en attaque (à la batte) et en défense (au lancer).
   Une manche s’est écoulée lorsque les deux équipes sont passées une fois en attaque et une fois en défense.
   Une équipe est en attaque tant qu’elle ne s’est pas fait éliminer trois joueurs.
 <p>
 <br>

 <p>
 Le premier temps de jeu correspond à un acte de défense,
 le lanceur envoie à son receveur une balle que le batteur tentera de frapper pour l’empêcher d’arriver jusqu'au receveur.
 Pour qu’une balle soit considérée comme bonne, elle doit être envoyée dans la zone de strike.
 Celle-ci correspond à un rectangle imaginaire dont la largeur correspond à celle du marbre et la hauteur à l’écartement entre les genoux et le milieu du corps du batteur.
 <p>
 <br>
 <br>
 <img src="images/Baseball-zone-strike.png">
 <p>
   La réussite d’un lancer est à l’appréciation de l’arbitre.
   Selon les arbitres, la zone de strike peut être légèrement différente de celle décrite ci-dessus.
 <p>
  <br>
 <p>
   Durant son passage en attaque l’équipe doit marquer un maximum de point.
   Un point est marqué lorsque le batteur devenu coureur a fait le tour des trois bases et est revenu au marbre,
   ce qui correspond à un tour complet du diamant. Un coureur peut tenter de gagner la prochaine base dès que la balle a quitté la main du lanceur.
   Attention, il ne peut y avoir qu’un seul coureur par base et un coureur ne peut pas en doubler un autre.
 <p>
 <br>
 <p>
   Pour devenir coureur, le batteur doit réussir à frapper une bonne balle du lanceur (lancée dans la zone de strike),
   et la balle doit atterrir dans la limite du terrain c'est-à-dire entre les deux lignes blanches située sur les côtés.
   Si la balle est frappée au-delà du champ extérieur entre les deux poteaux de limite de terrain, on parle d’un "home run",
   le batteur et tous les coureurs sur base marquent un point, pour un maximum de quatre (grand chelem).
   Enfin, si un lanceur envoie quatre mauvaises balles sur un même batteur, celui-ci gagne automatiquement la première base.
 <p>
 <br>
 <p>
   Le rôle des défenseurs est donc d’empêcher l’équipe adverse de marquer des points en éliminant trois attaquants.
   Il existe plusieurs manières pour éliminer un attaquant.
   Les principales sont :
     <br>
   -Le lanceur réalise trois strikes sur un même batteur. En d’autres termes, le batteur rate les trois balles envoyées par le lanceur.
     <br>
   -Un défenseur attrape la balle frappée par le batteur de volée, sans qu’elle n’ait touché le sol.
     <br>
   -Un défenseur touche un coureur avec la balle ou le gant avec la balle dedans entre deux bases.
     <br>
   -Un coureur est éliminé si la balle arrive avant lui sur la base où il doit se rendre.
     <br>
   -Une fois que trois attaquants sont éliminés l’équipe en défense passe en attaque.
 <p>



  </ion-content>

  <button (click)="catBaseball()" class="buttonNav">Scroll to the top</button>

  `
})

export class Baseball{
    static get parameters(){
        return[[NavController]];
    }
    constructor(nav){
        this.nav = nav
    }

    catBaseball(){
        this.nav.push(Baseball)
    }
}
