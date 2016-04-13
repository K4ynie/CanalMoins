import {Page, NavController, IONIC_DIRECTIVES} from 'ionic-angular'

@Page({
  template:
  `<ion-navbar *navbar class="title">
    <ion-title>Basketball (nba)</ion-title>
  </ion-navbar>

  <ion-content class="contenu2">
    <h1>Principes</h1>
    <hr>
    <br>
    <p>
       Le basketball est un sport unisexe, il peut être pratiqué aussi bien par des hommes que par des femmes.
       Il oppose deux équipes de 5 joueurs pendant 4 quart-temps de 12 min durant lesquelles les équipes deviennent alternativement défensives ou offensives.
       Le but est donc de marquer plus de point que l’adversaire.
       Un match dure 4x12min avec si besoin des prolongations de 5min.
    <p>
    <br>
    <br>
    <h1>Terrain</h1>
    <hr>
    <br>
    <p>
      Voici les dimensions du terrain
    <p>
    <br>
    <img src="images/basketball-terrain.png">
    <br>
    <br>
    <h1>Les Postes</h1>
    <hr>
    <br>
    <br>
    <p>
      Une équipe est composée de 5 joueurs donc 5 joueurs ayant un poste différents.<br>
      Voici donc les cinq postes:<br>
      1. Meneur de jeu (point guard)<br>
      2. Arrière (Shooting guard)<br>
      3. Ailier (Small forward)<br>
      4. Ailier fort (Power forward)<br>
      5. Pivot (center)<br>
    <p>
    <img src="images/Basketball-positions.png">
    <p>
    <br>
      En gros pour vous expliquer rapidement, le meneur de jeu est celui qui mène le jeu,
      il a la balle au départ des actions, et tente de mettre en place les tactiques imaginées par les coachs grâce à ses passes.
      Un bon meneur de jeu se juge sur un tas de choses, mais statistiquement, surtout sur son nombres de points et son nombre de passes décisives.
      Les meneurs sont généralement les plus petits de l'équipe.
    <p>
    <p>
      Le rôle de l'arrière est de prendre pas mal de tir à 3 points.
      Mais finalement, aussi souvent de pénétrer dans la raquette pour aller marquer en raison de sa vivacité
      (plus petite que celle d'un meneur mais plus grande que le reste de l'équipe)
    <p>
    <br>
    <p>
      L'ailier, lui, est un peu un intermédiaire. Plus costaud que l'arrière, plus fin et plus vif que les ailiers-fort ou pivot.
      C'est un poste assez complet en général.
    <p>
    <p>
      L'ailier fort, est comme son nom l'indique un ailier... mais en plus fort.
      Plus grand et plus gros en somme. C'est un poste défensif, qui se joue assez près du panier.
      Ceci dit, les ailiers fort savent aussi apporter beaucoup offensivement en raison de leur taille.
    <p>
    <br>
    <p>
      Le pivot. Et bien le pivot, c'est le joueur le plus gros et le plus grand de l'équipe.
      Pour être un bon pivot il faut être inbougeable. Un roc. Il a donc surtout un rôle déffensif dans la raquette, sous le panier.
      Mais néanmoins un pivot doit pouvoir apporter sur le plan offensif.
      On lui a donné ce nom parce-qu'il se retrouve souvent sous le panier à seulement "pivoter" pour marquer,
      ou défendre (en raison de sa lenteur aussi).
    <p>
    <br>
    <p>
      Les numéros des postes sont importants, on va souvent appeler un poste par son numéro.
      On dira de tel joueur qu'il joue 4. Par exemple.
    <p>
    <p>
      Quelques postes de joueurs :<br>
      Tony Parker : Meneur (1)<br>
      Kobe Bryant : Arrière (2)<br>
      Lebron James : Ailier (3)<br>
      Kevin Garnett : Ailier fort (4)<br>
      Shaquille O'neal : Pivot (5)<br>
    <p>
    <p>
      L'entre-deux a lieu non seulement au début de chaque mi-temps et de chaque prolongation mais aussi en cas de prise de balle par 2
      adversaires simultanément pendant 3 secondes. L'arbitre siffle alors un entre-deux qui permet de départager les 2 équipes.
    <p>
    <br>
    <p>
      L'equipe qui gagne l'entre-deux dispose de 8 secondes pour franchir la ligne médiane
      (Une fois la ligne médiane franchie, le ballon ne peut repasser dans la zone arrière: Retour en Zone)
      après une remise en jeu dans le demi-terrain opposé et à 24s pour tenter de scorer un panier à 2 ou 3 points selon sa position sur le terrain.
      Un joueur ne doit faire progresser le jeu que dans les limites suivantes:
    <br>
    <p>
    <p>
      Un joueur qui est immobile quand il reçoit le ballon peut faire un mouvement de pivot sur l'un ou l'autre pied.
      Un joueur qui est en mouvement quand il reçoit le ballon a le droit d'effectuer 2 pas avant de s'arrêter,
      de passer le ballon ou bien de tirer en course. Il est interdit de dribbler à 2 mains. Une fois le dribble arrêté il est interdit de reprendre le dribble,
      il faut alors passer, pivoter ou tirer.
    <p>
    <br>
    <p>
      Un joueur ne doit pas rester dans la zone réservée de l'équipe adverse pendant plus de 3 secondes à moins qu'il n'effectue un tir.
      La zone réservée occupe la partie de la raquette depuis la ligne de fond jusqu'à la ligne de lancer-franc.
    <p>
    <br>
    <p>
      Dans tous ses cas si l'equipe commet l'iune de ses interdictions, la balle passe à l'adversaire.
    <p>
    <br>
    <p>
      Pour effectuer une remise en jeu le joueur dispose de 5 secondes pour passer à un partenaire démarqué
    <p>
    <br>
    <p>
    <h3>Les fautes:</h3>
    <br>
    <p>
    <p>
      Il y a 3 sortes de fautes: des fautes personnelles, anti-sportives et techniques
    <p>
    <br>
    <p>
    <h3>Fautes personnelles</h3>
    <p>
    <br>
    <p>
      Ce sont les fautes commises pendant le jeu par les joueurs en essayant de prendre possession du ballon ou d'empêcher un tir au panier.
      Si la faute est commise sur un joueur en train de shooter, l'arbitre donne 2 lancers-francs à l'attaquant
      (ou 3 si le tir tenté est derrière la ligne des 6.25m ou un si le tir est réussi); sinon, la balle est remise en jeu derrière la ligne
    <p>
    <br>
    <p>
    <h3>Fautes anti-sportives</h3>
    <p>
    <br>
    <p>
      Celles-ci sont sifflées en cas de contact délibéré avec un adversaire
    <p>
    <br>
    <h3>Fautes techniques</h3>
    <br>

    <p>
      Celles-ci peuvent être sifflées contre un joueur ou un entraîneur en cas de conduite considérée comme contraire à l'esprit du jeu ou tout simplement injurieuse.
    <p>
    <br>

    <h1>Jeu</h1>
    <hr>
    <br>
    <p>
      blala
    <p>

</ion-content>

<button (click)="catBasketball()" class="buttonNav">Scroll to the top</button>
  `
})

export class Basketball{
    static get parameters(){
        return[[NavController]];
    }
    constructor(nav){
        this.nav = nav
    }

    catBasketball(){
        this.nav.push(Basketball)
    }
}
