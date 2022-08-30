import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of, tap } from 'rxjs';
import { Recipe, RecipeItem } from './recipe.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient,
              ) { }

  getRecipeList(): Observable<Recipe[]> {
    
    return this.http.get<Recipe[]>('http://localhost:3001/recipes').pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, []))
    )
   
  }

  getRecipeById(recipeId:number): Observable<RecipeItem>{
    return this.http.get<RecipeItem>(`http://localhost:3001/recipe/${recipeId}`)
  }

  private log(response: any){
    console.table(response);
  }
  
    private handleError(error: Error, errorValue: any) {
    console.error(error);
      return of(errorValue)
  }

  
}
