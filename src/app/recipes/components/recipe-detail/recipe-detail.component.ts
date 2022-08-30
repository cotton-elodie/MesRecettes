import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe, RecipeItem } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  //inputRecipeDetail!: Recipe;
  recipe$!: Observable<RecipeItem>;


  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const recipeId = +this.route.snapshot.params['id'];
    this.recipe$ = this.recipeService.getRecipeById(recipeId);
  }

}
