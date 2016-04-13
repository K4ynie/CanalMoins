import {Page, NavController, IONIC_DIRECTIVES} from 'ionic-angular'

@Page({
    template:
        `<ion-navbar *navbar>
    <ion-title>Cyclisme sur piste</ion-title>
  </ion-navbar>

  <ion-content class="contenu2">
    <h1>Principe</h1>
    <hr>
    <br>
    <br>
    <p>
      La piste est une discipline comprenant
      différentes épreuves se déroulant sur un vélodrome.
    <p>
    <h1>Terrain</h1>
    <hr>
    <br>
    <p>
      La partie cyclable d'un vélodrome
      est constituée de 2 lignes droites parallèles,
      reliées par des virages plus ou moins relevés
      permettant aux cyclistes d’atteindre des vitesses
      élevées (jusqu’à 75 km/h) en toute sécurité.
      La longueur d’une piste est le plus souvent un
      sous-multiple du kilomètre (200m, 250m et 333,33m).
      Le matériau utilisé pour le revêtement d’une piste
      est le ciment, le bitume ou le bois.
    <p>
    <img src="images/Cycle-Terrain.bmp">
    <br>
    <br>
    <h1>Les disciplines</h1>
    <hr>
    <br>
    <br>
    <br>
    <h3>La Vitesse Individuelle</h3>
    <br>
    <br>
    <p>
      Elle existe depuis les championnats du monde de 1895 à Cologne. Actuellement, aussi bien les femmes que les hommes se mesurent en Vitesse individuelle.
      Les coureurs effectuent un « 200 m départ lancé », contre la montre pour se qualifier (18 meilleurs temps retenus pour la suite du tournoi).
      Ensuite, les matches de vitesse opposent 2 ou 3 coureurs sur une distance déterminée par la longueur de la piste (2 ou 3 tours : environ 750 mètres).
      Les coureurs vainqueurs se qualifient pour la phase suivante. Les coureurs battus ont la possibilité de se repêcher. A partir des ¼ de finale (8 qualifiés),
      les coureurs se départagent en 2 manches gagnantes.
      Si nécessaire, il est procédé à une troisième manche, appelée "belle", pour désigner le vainqueur.
      La tactique joue un rôle très important en vitesse et les coureurs se livrent généralement à un véritable jeu du « chat et de la souris ».
      Dans la partie initiale de la course, les coureurs s’observent et se cherchent et peuvent effectuer un « surplace » ("Track Stand").
      La vitesse est probablement la course la plus populaire des rencontres sur piste.
    <p>
    <h3>Le kilomètre et le 500 mètres</h3>
    <br>
    <br>
    <br>
    <img src="images/cyclisme-km.png">
    <br>
    <br>
    <p>
      Le kilomètre départ arrêté Hommes (1000 mètres) et le 500 mètres départ arrêté Dames se disputent seul(e) contre la montre.
      Le classement s’effectue au temps.
    <p>
    <br>

    <h3>La vitesse par équipe</h3>
    <br>
    <p>
      Cette épreuve figure au programme olympique depuis les JO de Sydney 2000. Pour les Dames, elle apparaît pour la première fois en 2007 en Coupe du Monde et aux Championnats du Monde.
      Pour les hommes, l’épreuve se déroule par équipes de 3 coureurs sur 3 tours. Les 2 équipes démarrent aux points de poursuite de la piste. Les coureurs effectuent un départ arrêté. Le 1er coureur mène le 1er tour et s’écarte , le 2ème coureur fait de même pour le 2ème tour, laissant le 3ème coureur seul en piste pour le dernier tour.
      Le temps final est chronométré lorsque le 3ème coureur de l'équipe passe la ligne d'arrivée.
      L’épreuve pour femmes se déroule sur deux tours avec des équipes de deux coureurs. Le deuxième coureur termine seul le dernier tour.
      La compétition comporte 3 stades :
      - au 1er stade, les équipes ayant réalisé les 8 meilleurs temps sont qualifiées
      - au 2ème, elles sont opposées face à face (4 vainqueurs)
      - au 3ème, les 2 meilleurs temps se rencontrent en finale pour la 1ère et la 2ème place et les 2 autres pour la 3ème et la 4ème place.
    <p>
    <br>
    <br>

    <h3>Le keirin</h3>
    <p>
      Seuls les hommes participent actuellement au Keirin en France. Depuis 2002, les femmes, au niveau international peuvent y participer.
      Cette épreuve est originaire du Japon, où des paris sont effectués sur les coureurs.
      La première apparition de cette course au programme des Championnats du Monde date de 1980.
      Le Keirin est considéré comme la course la plus combative et physique.
      C’est une course de 2000 mètres. Lors des premiers 1400 mètres, l’allure des coureurs (6 à 8) est réglée par un entraîneur motocycliste.
      Celui-ci accélère progressivement (de 35 à 45 km/h) et quitte la piste à 600 mètres de l’arrivée. Ensuite, la compétition se déroule comme une épreuve de vitesse.
      Force, courage et agressivité sont nécessaires afin d'obtenir une position optimale pour l'assaut final de l'arrivée.
    <p>
    <br>
    <br>

    <h3>La poursuite individuelle</h3>
    <br>
    <p>
      En poursuite individuelle (4000m pour les hommes et 3000m pour les femmes), deux coureurs partent l’un en face de l’autre,
      au milieu de chaque ligne droite. Les 8 meilleurs temps sont qualifiés pour le tour suivant.
      Ensuite, les 4 coureurs sont qualifiés pour les finales : 1ère et 2ème places pour les 2 meilleurs temps,
      3ème et 4ème places pour les 2 autres..
      Du coup de pistolet jusqu'à la ligne d'arrivée, le but de la course est de rattraper son adversaire.
      Si l'un des coureurs rattrape son opposant avant la fin de la distance de la course, le coureur rejoint est éliminé.
      Dans le cas contraire, le vainqueur de la poursuite est celui ayant parcouru la distance le plus vite.
      Les tactiques en poursuite sont basées sur les cadences. Les meilleurs gardent la même cadence tout le long de l'épreuve.
      Savoir pédaler de manière fluide et régulière et se concentrer intensément est tout aussi important dans cette discipline que l'aptitude à endurer la souffrance physique.
    <p>
    <br>
    <br>
    <h3>La poursuite par équipe</h3>
    <br>
    <p>
      Cette épreuve est réservée aux hommes uniquement.
      Elle est similaire à la poursuite individuelle mais se dispute par équipes de 4 coureurs sur une distance de 4 km.
      Les coureurs peuvent se relayer tous les ½ ou tous les tours. A l'arrivée, le classement s’effectue sur le 3ème homme.
      La tactique consiste à conserver le plus longtemps possible une bonne cohésion entre les 4 équipiers en bénéficiant au mieux de l'effet d'aspiration.
    <p>
    <br>
    <br>

    <h3>La course aux points</h3>
    <br>
    <p>
      20 à 30 coureurs sur une distance maximum de 30 km.
      Des classements intermédiaires tous les 2 km avec des points attribués aux 4 premiers,
      permettent de départager les concurrents. Le classement final s’établit aux points gagnés et accumulés par les coureurs lors des sprints intermédiaires,
      lors du sprint final et par tour gagné. Un coureur qui gagne un tour sur le peloton principal obtiendra 10 points.
      Tout coureur perdant un tour sur le peloton principal perdra également 10 points.
      Les coureurs comptant un ou plusieurs tours de retard sur le peloton principal pourront être éliminés par le collège des commissaires,
      de façon à ne pas fausser le classement.
    <p>
    <br>
    <br>
    <h3>L’américaine</h3>
    <br>
    <p>
      Cette course est apparue pour la première fois au Madison Square Garden de New York,
      d’où son nom. Cette épreuve se dispute par équipe de 2 hommes se relayant entre eux,
      essayant de prendre un tour d'avance sur leurs rivaux.
      La distance maximum est de 50km. Tous les 5km, des points sont attribués aux 4 premières équipes.
      Un coureur de l’équipe étant toujours en course,
      l’autre peut récupérer plus ou moins longtemps en réduisant sa vitesse et en roulant en haut du virage.
      Les relais se font au cuissard (à la poussée) ou à la volée (la main dans la main).
      Le classement s’effectue d’abord à la distance (les équipes ayant pris un ou plusieurs tours d’avance),
      puis selon sur le même principe que la course aux points.
    <p>
    <br>
    <br>

    <h3>Le scratch</h3>
    <br>
    <p>
      Les coureurs partent groupés sur une distance maximum de 15km pour les hommes et 10 km pour les femmes. Classement à l’arrivée.
    <p>
    <br>
    <br>
    <h3>L’omnium </h3>
    <br>
    <p>
      Epreuve individuelle se disputant en plusieurs manches de différentes épreuves.
      Le classement se fait par addition des points attribués ou des places obtenues dans chaque manche.
    <p>
    <br>
    <br>
    <h3>Le demi-fond</h3>
    <br>
    <p>
      Course disputée par des coureurs derrière moto sur une distance de 50 km ou sur une heure de course.
      Cette épreuve est de moins en moins pratiquée, mais elle a été très populaire jusqu’aux années 80 environ.
    <p>
    <br>
    <br>
    <h3>Les 6 Jours</h3>
    <br>
    <p>
      Ils se disputent par équipes de deux coureurs sur 6 jours consécutifs, avec des plages de repos.
      L’américaine constitue la discipline essentielle. Des épreuves annexes (élimination, course aux points…)
      permettent d’attribuer des points aux équipes.
      Est déclarée victorieuse l’équipe qui a effectué la plus grande distance lors des épreuves d’américaine.
      Ensuite, les équipes qui terminent dans le même tour sont départagées par les points attribués dans l’américaine et les épreuves annexes.
    <p>
  </ion-content>
  <button (click)="catCycleSurPiste()" class="buttonNav">Scroll to the top</button>

  `
})

export class CyclismeSurPiste{
    static get parameters(){
        return[[NavController]];
    }
    constructor(nav){
        this.nav = nav
    }

    catCycleSurPiste(){
        this.nav.push(CyclismeSurPiste)
    }
}
