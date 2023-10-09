import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  persone : any
  constructor(private firebase : FirebaseService){}
  ngOnInit(): void {
    this.firebase.getPersona('https://backendangular-d874b-default-rtdb.europe-west1.firebasedatabase.app/persone.json').subscribe((data:any)=>{
      this.persone = Object.keys(data).map((key)=> {
         data[key]['id'] = key 
         return data[key]
      })
      console.log(this.persone)
      
    })
    
  }
  

}
