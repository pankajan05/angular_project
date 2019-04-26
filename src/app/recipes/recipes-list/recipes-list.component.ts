import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('testRecipse', 'This is the test Recipse', 'C:\\Users\\Pankajan\\Documents\\GitHub\\angular_project\\img\\_46b9192e-cf87-11e7-ab73-d03b3a59d103.jpg'),
      new Recipe('test2', 'this is sample two for check other', 'C:\\Users\\Pankajan\\Documents\\GitHub\\angular_project\\img\\269223.jpg')
    ];
  constructor() { }

  ngOnInit() {
  }

}
