import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 5, 'pieces'),
    new Ingredient('Tomate', 10, 'pieces')
  ];
  
  getIngredients() {
    return this.ingredients.slice();
  }
  
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]){
    //aqui deberiamos comprobar en aumentar las unidades del ingrediente
    //existente en vez poner otra vez el ingrediente
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
