import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { project } from './../../Models/project';
import { ProjectService } from '../../services/projects.service';
import { about } from 'src/app/Models/about';
import { AboutMeService } from '../../services/about-me.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  about: about[];
  
  idSwiper: number = 2;
   
  constructor( private cd: ChangeDetectorRef, private _aboutService: AboutMeService) {
      this.about = _aboutService.getAboutMe();
   }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    this.cd.detectChanges();    
  }

  
  idSwiperactual(e:any){
    this.idSwiper = e;
    
    this._aboutService.about = this._aboutService.getAbout(this.idSwiper);
  } 

}
