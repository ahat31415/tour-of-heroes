import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../hero';

// Данный компонент просто отображает героя который получает из  другого компонента
// это сделано для разделения конкретной задачи от общей части программы

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
    //
  }

}
