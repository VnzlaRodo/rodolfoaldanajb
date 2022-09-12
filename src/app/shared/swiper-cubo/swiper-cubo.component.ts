import { Component, ViewEncapsulation, ViewChild, Output, EventEmitter } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper";
import { AboutMeService } from '../../services/about-me.service';
import { about } from 'src/app/Models/about';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);

@Component({
  selector: "app-swiper-cubo",
  templateUrl: './swiper-cubo.component.html',
  styleUrls: ["./swiper-cubo.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperCuboComponent {

  @Output() idSwiper = new EventEmitter<number>();

  aboutMe: about[];

  constructor( private _aboutService: AboutMeService) {

    this.aboutMe = _aboutService.getAboutMe();
  }
  
  
  public paginate(e:any){       
    
    this.idSwiper.emit(e[0].activeIndex)
    
  }
   
}

