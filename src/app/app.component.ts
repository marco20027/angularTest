import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  isVisisble = true
  persone  = [
    {nome :'Luca', cognome :'Rossi', isOnline : true},
    {nome: 'Marco', cognome : 'Campanale',isOnline : true},
    {nome: 'Andrea',cognome:'puppis',isOnline : false}
  ]
  numero: number = 3
  onInput(e:any){
    this.title = e.target.value
    console.log(this.title)
  }
  onClick(e:Event){
    this.title = "test"
  }

  
}
