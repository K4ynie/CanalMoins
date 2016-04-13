/*Tentative Mise à jour pour mercredi
import {Component} from 'angular/core';
import {IONIC_DIRECTIVES, NavController} from 'ionic-angular';
import {Http} from 'angular2/http';

@Component({
  selector:'component',
  template:
      `
      <button (click)="test()">
                Lire la suite frère
                <ion-icon name="book"></ion-icon>
                <ul>
                    <li *ngFor="#todo of sports">
                    {{todo.title}}
                    </li>
                </ul>
            </button>
      `,
  directives: [IONIC_DIRECTIVES]
})

export class Component{
      constructor(http: Http){
    this.http = http;
    this.test = [];
    }

    test(){
    this.http.get('http://localhost:3000/sports')
      .map(response => response.json())
      .subscribe(result => this.todos = result)
    }
}
*/
