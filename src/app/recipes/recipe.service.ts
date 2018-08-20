import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Cordero Asado',
      'Cordero asado al estilo extremeño',
      'https://img.saboresdehoy.com/receta/585/carre-de-cordero-asado-express.jpg',
      [
        new Ingredient('Cordero', 4.5, 'kg'),
        new Ingredient('Agua', 1, 'l'),
        new Ingredient('Pimienta', 1, 'pizca'),
        new Ingredient('Laurel', 2, 'hoja'),
        new Ingredient('Sal', 1, 'pizca'),
        new Ingredient('Patatas', 2, 'kg')
      ]),
    new Recipe('Hamburguesa',
      'Hamburguesa típica alemana',
      'https://elviajero.elpais.com/elviajero/imagenes/2017/11/02/actualidad/1509615048_727318_1509617190_noticia_grande.jpg',
      [
        new Ingredient('Carne picada', 200, 'gr'),
        new Ingredient('Pan de hamburgesa', 1, 'par'),
        new Ingredient('Lechuga', 1, 'unidad'),
        new Ingredient('Tomate', 2, 'unidad'),
        new Ingredient('Queso', 100, 'gr'),
        new Ingredient('Mahonesa ', 20, 'gr')
      ])
  ];
  
  constructor(private shoppingListService: ShoppingListService) {}
  
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
