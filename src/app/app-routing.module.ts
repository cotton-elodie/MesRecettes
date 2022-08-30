import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipes/components/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';

const routes: Routes = [
  { path: 'recettes', component: RecipeListComponent},
  // { path: 'recette', component: RecipeComponent},
  { path: 'recette/:id', component: RecipeDetailComponent},
  { path: '', redirectTo:'recettes', pathMatch:'full' },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
