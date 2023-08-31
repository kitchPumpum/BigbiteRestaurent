import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{
  images: string[] = [
    '../../assets/Images/BigBite.png',
    '../../assets/Images/kabab.jpg',
    '../../assets/Images/arabicfood.jpg',
    '../../assets/Images/bbq.jpg',
    '../../assets/Images/dinner.jpg',
    '../../assets/Images/dessert.jpg',
    '../../assets/Images/coldjuice.jpg'
  ];

  currentIndex: number = 0;

  ngOnInit() {
    this.startCarousel();
  }
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000); // Change image every 5 seconds
    }
  }
