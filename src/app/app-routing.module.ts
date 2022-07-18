import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';
import { RecipeComponent } from './recipes/components/recipe/recipe.component';

const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'recette', component: RecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
