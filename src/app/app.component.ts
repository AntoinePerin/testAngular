import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myOtherSnap=new FaceSnap(
      'Antoine',
      'Le plus bg',
      'assets/img/photo.jpg',
      new Date(),
      2
    )

    this.myLastSnap= new FaceSnap(
      'Goudurix',
      'La meilleure attraction du parc',
      'https://static.wixstatic.com/media/84686c_96b15b58df61431aa41c71cfbb4789cf~mv2.jpg/v1/fill/w_740,h_555,al_c,q_90/84686c_96b15b58df61431aa41c71cfbb4789cf~mv2.webp',
      new Date(),
      3
    )
  }
  
}
