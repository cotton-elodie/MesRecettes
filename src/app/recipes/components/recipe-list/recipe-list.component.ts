import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes!: Recipe[];
  recipes$!: Observable<Recipe[]>

  constructor(
    private recipeService : RecipeService
  ) { }

  ngOnInit(): void {
    this.recipes$ = this.recipeService.getRecipeList();
  }

}
