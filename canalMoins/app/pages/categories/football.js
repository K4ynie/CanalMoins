import {Page, NavController, IONIC_DIRECTIVES} from 'ionic-angular'

@Page({
    template:
        `<ion-navbar *navbar>
    <ion-title>Football</ion-title>
  </ion-navbar>

  <ion-content class= "contenu2">
    <h1>Principes de jeu</h1>
    <hr>
    <br>
    <p>
      Deux équipes de 11 joueurs s'opposent durant 2 mi-temps de 45min.
      Le but est de marquer plus de buts que l'autre équipe et de ne pas terminer
      à moins de 9 joueurs.
    <p>
    <br>
    <br>

    <h1>Terrain</h1>
    <hr>
    <br>
    <p>
      Les piquets de coin, plus communément appelés
      « poteaux de corner », sont-ils obligatoires ?
      OUI. Un piquet de coin doit être planté à chacun des
      quatre angles du terrain.
       La hampe ne devra pas être pointue et les piquets de coin,
      d’une hauteur minimum de 1,5 mètre, seront fabriqués dans un
       matériau ne présentant aucun danger en cas de rupture.
      Le fanion de couleur vive (rouge, jaune, voire phosphorescent pour
      les matches joués en nocturne), aura des dimensions de 45 cm sur 45 cm.
      Une rencontre ne peut se dérouler sans piquet de coin. Ainsi,
       la finale de la Coupe du Monde 1974, RFA/ Pays-Bas, a dû être retardé de quelques minutes,
      l’arbitre ayant constaté que l’on avait omis de poser les piquets de coin sur la pelouse du Stade Olympique de Munich !
      Que doit faire l’arbitre, en cours de match, en cas de brouillard, de panne d’éclairage ou de terrain devenu impraticable ?

      L’arbitre informera les deux capitaines qu’il arrête momentanément le match,
      les conditions adéquates n’étant plus réunies pour le bon déroulement de la partie.
      La durée de l’interruption (ou le cumul des arrêts) ne pourra excéder 45 minutes.
      Passé ce délai, le match sera définitivement arrêté et l’arbitre adressera un rapport à la commission compétente.
      Cette dernière décidera de faire rejouer ou non la rencontre.
    <p>
    <br>
    <br>
    <img src="images/Football-Dimensions.png">
    <br>
    <br>
    <br>
    <h1>Postes</h1>
    <hr>
    <br>
    <br>
    <img src="images/Football-Poste.png">
    <br>
    <br>
    <p>
      Une équipe de Football est constituée de 11 joueurs (10 + 1 gardien). Chaque joueur porte un numéro dans le dos pour être identifiable. Au départ, ces numéros correspondent à un poste particulier.
      Le Numéro 1 : le gardien de buts
       Le gardien de buts est chargé de protéger les buts à l’aide des mains, des pieds... ou tout autre partie du corps. C’est le seul joueur à pouvoir jouer le ballon avec les mains dans sa surface de réparation.
      Il doit faire preuve de grande qualité de détente verticale (pour aller chercher le ballon en l’air sur les cornes par exemple) et de détente horizontale (pour plonger pour attraper ou repousser les tirs de l’adversaire).
      Aujourd’hui dans le football moderne, le gardien de buts est obligé de savoir jouer avec les pieds pour jouer les ballons sur passes arrière ou quand sa défense se trouve haut sur le terrain (dans ce cas, le gardien joue loin de ses cages).
      Il doit faire preuve d’une bonne lecture du jeu, d’anticipation, de rapidité, de caractère pour placer ou replacer sa défense.
      Numéro 2 et 3 : les arrières latéraux
       Le numéro 2 est l’arrière droit et le numéro 3 est l’arrière gauche. Ils opèrent sur les cotés de la défense et doivent empêcher les attaquants adverses de passer par ces zones pour délivrer des centres.
      En situation offensive, ils doivent "prendre le couloir" pour apporter le sur-nombre et éventuellement déborder la défense adverse et délivrer des centres pour leurs attaquants.
      Ils doivent faire preuve de vitesse, d’un bon jeu de tête, de technique, de placement et de replacement.
      Numéro 4 et 5 : le "stoppeur" et le "libéro"
       Le stoppeur et le libéro forment la charnière centrale. Aujourd’hui, deux joueurs se partagent ces deux rôles en fonction du coté de l’attaque adverse(gauche ou droite en fonction de leur pied de prédilection).
      N°4 - Le stoppeur est au marquage de l’avant-centre adverse et doit l’empêcher de prendre le ballon ou l’empêcher de progresser. Il présente en général de bonne qualité de jeu de tête ce qui lui permet de monter en situation offensive lorsque son équipe bénéficie d’un corner.
      N° 5 -  Le libéro est le dernier défenseur. En fait, il est "libre" car il n’est au marquage d’aucun attaquant adverse mais il doit aider et intervenir dans le cas où un de ses défenseurs se ferait éliminer par un attaquant. Le libéro doit faire preuve de qualité d’anticipation pour intercepter le ballon et de technique car c’est le premier relanceur.
      Numéro 6 e 7 : les milieux défensifs
       Ils sont chargés de la récupération du ballon et opèrent devant leur défense. On les appellent les "poumons" de l’équipe car ils courent de partout sur le terrain. Ils doivent faire de grosses qualité d’endurance et de vitesse ; En fait, il y a un milieu défensif qui joue juste devant sa défense et un autre qui joue un peu plus haut qui est chargé du "pressing". Ils remontent également les ballons en phase d’attaque et servent d’intermédiaire entre la défense et les milieux offensifs. Ils doivent faire preuve de bonnes qualités techniques pour la relance.
      Numéro 8 et 10 : les milieux offensifs
       Ils doivent créer le jeu c’est pour cela qu’on les appellent les "milieux créateurs". Ils doivent orienter le jeu et donner des ballons aux attaquants. Ils doivent preuve d’une bonne vision du jeu, de qualité d’élimination (dribble) des adversaires, jeu court (petit périmètre) quand il y a une forte concentration de joueurs, jeu long pour faire changer l’orientation du jeu (transversales) ou balle en profondeur pour l’avant-centre et des qualités de finisseur pour marquer des buts. Ils participent également au travail défensif en bloquant les couloirs en empêchant les arrières adverses de monter.
      Numéro 11 : le 2ème attaquant
       Il évolue en général en soutien de l’avant-centre. Son jeu consiste à tourner autour de l’avant-centre pour jouer le 2ème ballon et alimenter en ballon l’avant-centre. C’est un joueur en généralement adroit et très technique doué de qualité de vitesse. Il effectue avec l’avant-centre le premier travail défensif en gênant la relance adverse et en faisant le "pressing" pour gêner la transmission du ballon.
      Numéro 9 : l’avant-centre
       C’est le joueur qui doit marquer les buts. C’est le joueur le plus proche du but adverse. Il doit faire preuve de d’explosivité pour prendre de vitesse les défenseurs avoir le "sens du but" pour se trouver à l’endroit où va tomber le ballon et des qualités d’adresse pour le reprendre et marquer.
      Numéro 12,13 et 14 : les remplaçants
       Les remplaçants doivent être prêts à pallier leurs coéquipiers qui sont sur le terrain en cas de blessure, changement tactique ou fatigue. On trouve en général, un défenseur, un milieu et un attaquant.
    <p>
    <br>
    <br>
    <h1>Jeu</h1>
    <hr>
    <br>
    <p>Blalalalalaa<p>


  </ion-content>
  <button (click)="catFootball()" class="buttonNav">Scroll to the top</button>
  `

})
export class Football{
    static get parameters(){
        return[[NavController]];
    }
    constructor(nav){
        this.nav = nav
    }

    catFootball(){
        this.nav.push(Football)
    }

}
