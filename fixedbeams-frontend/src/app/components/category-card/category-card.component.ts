import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DomainService } from 'src/app/services/domain.service';
import { Category } from '../../models/cotegory.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: [ './category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  domainCategories: Category[];

  constructor(
    private readonly _domainService: DomainService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router
  ) {
    const obsRuta = this._activatedRoute.params;
    obsRuta.subscribe(
      (parametros: Params) => {
        const id = Number(parametros.id);
        if(id != NaN){
          this.getDomainCategories(id);
        }
      }
    )
  }
   
  ngOnInit(): void { }

  getDomainCategories(id: number){
    const obsDomainCategories = this._domainService.getDomainCategories(id);
    obsDomainCategories.subscribe(
      (domainCategories: Category[]) => {
        this.domainCategories = domainCategories;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  irAProductos(category: Category){
    const url = ["/category", category.id];
    this._router.navigate(url);
  }

}
