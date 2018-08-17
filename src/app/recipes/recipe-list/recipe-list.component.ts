import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This simply a test', 'http://estaticos.telva.com/apps/cocina/imagenes/recetas/carne/jamon_cocido.jpg'),
    new Recipe('A Test Recipe 2', 'This simply a test 2', 'http://estaticos.telva.com/apps/cocina/imagenes/recetas/carne/jamon_cocido.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }
  
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
