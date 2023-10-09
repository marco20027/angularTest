import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit{
  homeform:any = FormGroup;

  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    console.log(form)
    form.reset()

  }

}
