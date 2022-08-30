import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() inputRecipe!: Recipe;
  

  // recipe!: Recipe|undefined;
  //recipe$!: Observable<Recipe>

  constructor(
    private router: Router


  ) { }


  ngOnInit(): void {

  }

  goDetailRecipe() {
    this.router.navigateByUrl(`recette/${this.inputRecipe.id}`);
  }


}
