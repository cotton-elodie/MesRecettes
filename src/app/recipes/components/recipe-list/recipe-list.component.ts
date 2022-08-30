import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

 //recipes!: Recipe[];
  recipes$!: Observable<Recipe[]>
  // @Input() inputRecipe!: Recipe;

  constructor(
    private recipeService: RecipeService,
  ) { }

  ngOnInit(): void {
    this.recipes$ = this.recipeService.getRecipeList();
  }

}
