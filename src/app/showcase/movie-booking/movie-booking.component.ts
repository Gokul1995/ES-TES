import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.scss']
})
export class MovieBookingComponent implements OnInit {

  carouselOptions = {
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    dots: false,
    items: 3,
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<div class="nav-btn prev-slide"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
      '<div class="nav-btn next-slide"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'],
    responsiveClass: true,
    slideBy: 3,
  };

  images = [
    {
      text: 'Everfresh Flowers',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg'
    },
    {
      text: 'Blue Clear',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg'
    },
    {
      text: 'Evening Clouds',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg'
    },
    {
      text: 'Fontains in Shadows',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg'
    },
    {
      text: 'Kites in the Sky',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg'
    },
    {
      text: 'Sun Streak',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg'
    },
    {
      text: 'Blue Clear',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg'
    },
    {
      text: 'Evening Clouds',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg'
    },
    {
      text: 'Fontains in Shadows',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg'
    },
    {
      text: 'Kites in the Sky',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg'
    },
    {
      text: 'Sun Streak',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg'
    },
    {
      text: 'Blue Clear',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
