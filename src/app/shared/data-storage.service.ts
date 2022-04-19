import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({
  //! this is a shortcut way of adding the service into the app modules providers array
  providedIn: "root",
})
export class DataStorageService {
  constructor(
    private httpRequest: HttpClient,
    private recipeService: RecipeService
  ) {}

  //? adds recipes to the firebase(using PUT method we can overide the previous stored data hence the new data will be stored.)
  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.httpRequest
      .put(
        "https://ng-recipebook-65cde-default-rtdb.firebaseio.com/recipes.json",
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  //? fetching the stored recipes from firebase:
  fetchReciepes() {
    this.httpRequest
      .get<Recipe[]>(
        "https://ng-recipebook-65cde-default-rtdb.firebaseio.com/recipes.json"
      )
      .subscribe((fetchedData) => {
        console.log(fetchedData);
        this.recipeService.setRecipes(fetchedData);
      });
  }
}
