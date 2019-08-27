import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  feedbacks: any[] = [
    { comment: 'Scheme  of the Company  is  very  interesting.', rating: 'BEST', name: 'Sachin Dehankar  Pune' },
    { comment: 'Scheme  of the Company  is  very  interesting.', rating: 'BEST', name: 'Mrs.  Neela  Moktali  Sangli' },
    { comment: 'Scheme  of  Company  is  very  Benificial', rating: 'BEST', name: 'Sandip  Patil  Kolhapur' },
    { comment: 'Company  Scheme  is  impressive', rating: 'FINE', name: ' Arati  Harish Ingale  Mumbai' },
    { comment: 'Products  are  worth considering.', rating: 'GOOD', name: 'Mrs. Sneha  Marathe Sangli' },
    { comment: 'Scheme   is  very  GOOD', rating: 'BEST', name: 'Shrikant  Kulkarni  Pune' },
    { comment: 'Motive of the Scheme  is  honest', rating: 'BEST', name: 'Amit  Kulkarni , Karad' },
    { comment: 'Products  are  selctive .', rating: 'BEST', name: ' Sudhir Deshapande  Sangli' },
    { comment: 'Let us make the Scheme  succesful ', rating: 'BEST', name: 'Sadashiv  Kulkarni   Kolhapur' },

  ]
}
