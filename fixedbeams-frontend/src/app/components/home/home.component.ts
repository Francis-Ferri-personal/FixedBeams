import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../services/domain.service';
import { Category } from '../../models/cotegory.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idDomain: number = 1;
  domainCategories: Category[]; 

  constructor(private readonly _domainService: DomainService) { }

  ngOnInit(): void {
    this.getDomainCategories();  

  }
  getDomainCategories(){
    const obsDomainCategories = this._domainService.getDomainCategories(this.idDomain)
    obsDomainCategories.subscribe(
      (domainCategories: Category[]) => {
        this.domainCategories = domainCategories;
        console.log(domainCategories);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}



