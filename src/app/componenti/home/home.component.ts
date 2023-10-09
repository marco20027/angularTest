import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  homeform:any = FormGroup;
  body:any =  {};
  persone:any
  constructor(private firebase : FirebaseService){}
  ngOnInit(): void {
   this.homeform = new FormGroup({
    nome: new FormControl('Luca', Validators.required) ,
    cognome:new FormControl('Boh', Validators.required),
    mail: new FormControl('',[ Validators.required, Validators.email])

   })
   console.log(this.homeform.value.nome)
  }


  onSubmit(){
    console.log("inizio API")
    this.firebase.insertPersona('https://backendangular-d874b-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
    {nome:this.homeform.value.nome, cognome:this.homeform.value.cognome, mail: this.homeform.value.nome}).subscribe(data => {
     console.log(data)
    })
    console.log("fine API")
  }
  onDeletePersona(){
    this.firebase.getPersona('https://backendangular-d874b-default-rtdb.europe-west1.firebasedatabase.app/persone.json').subscribe((data:any)=>{
      this.persone = Object.keys(data).map((key)=> {
         data[key]['id'] = key 
         return data[key]
      })
      console.log(this.persone[0].id)
      this.firebase.deletePersona('https://backendangular-d874b-default-rtdb.europe-west1.firebasedatabase.app/persone',this.persone[0].id).subscribe(data=>{
      console.log(data)
    })
    })
    
  }

}


