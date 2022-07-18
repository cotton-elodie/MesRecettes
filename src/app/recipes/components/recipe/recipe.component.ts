import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() inputRecipe!:Recipe;
  
  // recipe!: Recipe|undefined;
  recipe$!: Observable<Recipe>



  constructor(
    private recipeService: RecipeService,
    private route : ActivatedRoute

    
  ) { }

  ngOnInit(): void {
   
    
    
  }

  

}
