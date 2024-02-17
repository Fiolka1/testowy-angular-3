import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-raki',
  standalone: true,
  imports: [NgFor],
  templateUrl: './raki.component.html',
  styleUrl: './raki.component.css'
})
export class RakiComponent {
  tablica_obiektuw=[
    {
      sraki:"dupaki",
      milaki:"ptaki",
      cyfry:12
    },
    {
      sraki:"du234apaki",
      milaki:"ptaf3ki",
      cyfry:13
    },
    {
      sraki:"dup2e4aki",
      milaki:"ptaasdki",
      cyfry:11232
    },

  ]
}
