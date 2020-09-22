import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../models/cotegory.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styles: [
  ]
})
export class CategoryCardComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit(): void {

  }

}
