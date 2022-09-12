import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder , Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    name      : ['', [Validators.required, Validators.minLength(4)] ],
    email     : ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)  ] ],
    reason    : ['', Validators.required ],
    quotation : ['', Validators.min(0)],
    details   : [''],
    status    : [false]
  });

  constructor( private fb: FormBuilder, private _messageServices: MessagesService) { }

  ngOnInit(): void {
  }

  
  validCap(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
  
  async onSubmit(){
    if ( this.miFormulario.invalid ){
      this.miFormulario.markAsTouched();
      return
    }    
        
    const reponse = await this._messageServices.setMessage(this.miFormulario.value);
        
    this.miFormulario.reset();

    document.getElementById('finish');
  }
}
