import { Component, OnInit, Input } from '@angular/core';
import { about } from 'src/app/Models/about';

@Component({
  selector: 'modal',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

@Input() item: about = {guid: '', nombre: '', nivel: '', descripcion: '', url: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
