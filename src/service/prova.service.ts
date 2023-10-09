import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvaService {
  persone  = [
    {nome :'Luca', cognome :'Rossi', isOnline : true},
    {nome: 'Marco', cognome : 'Campanale',isOnline : true},
    {nome: 'Andrea',cognome:'puppis',isOnline : false}
  ]
  constructor() { }
}
